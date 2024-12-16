// import OTP from "@app/models/Otp";
// import { connectToDB } from "@app/mongodb";
// import { sendMail } from "@lib/otpUtility";
import { sendMail } from "@/app/lib/mailUtility";
import OTP from "@/app/models/Otp";
import { connectToDB } from "@/app/mongodb";
import crypto from "crypto";

// Define the request body interface
interface OTPRequestBody {
  type: "send" | "verify";
  userId?: string;
  otp?: number;
  email: string;
}

export const POST = async (req: Request) => {
  try {
    await connectToDB(); // Ensure the database is connected

    const body: OTPRequestBody = await req.json(); // Use req.json() to parse the request body
    const { type, userId, otp, email } = body;

    if (type === "send") {
      // Generate and send OTP
      const generatedOtp = crypto.randomInt(100000, 999999); // Generate a 6-digit OTP

      // Store the OTP in the database with expiration
      const newOtp = await OTP.create({
        userId,
        otp: generatedOtp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiration
      });

      // Send the OTP to the user's email using the sendMail utility
      await sendMail({
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${generatedOtp}`,
      });

      return new Response(
        JSON.stringify({ message: "OTP sent successfully" }),
        {
          status: 200,
        }
      );
    } else if (type === "verify") {
      // Verify the OTP
      const existingOtp = await OTP.findOne({ email, otp });

      if (!existingOtp) {
        return new Response(
          JSON.stringify({ error: "Invalid or expired OTP" }),
          {
            status: 400,
          }
        );
      }

      // OTP is valid, delete it and respond
      await OTP.deleteOne({ _id: existingOtp._id });

      return new Response(
        JSON.stringify({ message: "OTP verified successfully" }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Invalid request type" }), {
        status: 400,
      });
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to process OTP request" }),
      {
        status: 500,
      }
    );
  }
};
