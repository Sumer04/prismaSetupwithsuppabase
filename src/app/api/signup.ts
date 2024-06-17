import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Action to read
export const GET = async (req: NextRequest) => {
  const posts = await prisma.user.findMany({});
  return NextResponse.json({ posts });
};

// Action to create
export const POST = async (req: NextRequest) => {
  const { name, email } = await req.json();
  const post = await prisma.user.create({
    data: { name, email },
  });
  return NextResponse.json({ post });
}