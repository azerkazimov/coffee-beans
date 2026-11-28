import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">404 | Not Found</h1>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <Link href="/" className="text-2xl text-blue-500">Go back to the home page</Link>
    </div>
  );
}