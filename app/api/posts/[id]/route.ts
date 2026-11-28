import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await data.json();
    if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
}