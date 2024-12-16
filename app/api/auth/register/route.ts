import User from "@/app/models/User";
import { connectToDB } from "@/app/mongodb";
import { hash } from "bcryptjs";
import { NextRequest } from "next/server";
// import User from "../../../models/user";
// import { connectToDB } from "../../../mongodb";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();

    const body = await req.json();
    const { username, email, password } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (err) {
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
