// /app/api/openai/route.ts

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Update to the new model
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    return NextResponse.json(
      { text: response.choices[0].message.content },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
