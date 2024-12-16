import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import crypto from "crypto";
import { connectToDB } from "@/app/mongodb";
import User from "@/app/models/User";
import OTP from "@/app/models/Otp";
import { sendMail } from "@/app/lib/mailUtility";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid email or password");
        }

        await connectToDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user || !user.password) {
          throw new Error("Invalid password");
        }

        const isMatch = await compare(credentials.password, user.password);

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        // Generate and send OTP
        const generatedOtp = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP
        await OTP.create({
          userId: user._id,
          otp: generatedOtp,
          expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiration
        });

        // Send OTP to user's email
        await sendMail(
          user.email,
          "Your OTP Code",
          `Your OTP is ${generatedOtp}`
        );

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session }) {
      const mongodbUser = await User.findOne({ email: session.user?.email });
      if (mongodbUser) {
        session.user = {
          ...session.user,
          id: mongodbUser._id.toString(),
          ...mongodbUser._doc,
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
