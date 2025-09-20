import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchQuery = searchParams.get("q") || "";

    const queryOptions: Parameters<typeof prisma.post.findMany>[0] = {
      where: {
        published: true,
      },
      include: {
        author: { select: { name: true, image: true } },
        _count: { select: { comments: true, likes: true } },
      },
      orderBy: { createdAt: "desc" },
    };

    if (searchQuery) {
      queryOptions.where!.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { content: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    const posts = await prisma.post.findMany(queryOptions);

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAdmin();
    const { title, content, published } = await request.json();

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
        authorId: user.id,
      },
      include: {
        author: {
          select: { name: true, image: true },
        },
      },

    });

    return NextResponse.json(post, { status: 201 });
  } catch  {
     return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}
