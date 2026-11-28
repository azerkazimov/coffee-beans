

export default async function PostPage({ params }: { params: { id: string } }) {
// const params = useParams(); // hook which is used in CSR with "use client"
// const searchParams = useSearchParams(); // hook which is used in CSR with "use client"



  const { id } = await params;
  console.log(id);

  const data = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await data.json();
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <h1 className="text-2xl font-bold text-white">{post.title}</h1>
      <p className="text-gray-500">{post.body}</p>
    </div>
  );
}