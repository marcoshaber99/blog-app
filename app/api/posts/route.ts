import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";
import { PostSchema } from "@/lib/schemas";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const json = await request.json(); // get the request body
    const body = PostSchema.parse(json); // validate the request body

    const post = await prisma.post.create({
      data: body,
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Failed to create post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
