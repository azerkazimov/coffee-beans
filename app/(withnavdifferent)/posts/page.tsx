import Loading from "@/app/loading";

import { Suspense } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

async function PostsList() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function PostsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsList />
    </Suspense>
  );
}