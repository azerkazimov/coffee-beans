export async function generateStaticParams() {
    return [
        {username: "mojombo"},
        {username: "defunkt"},
        {username: "pjhyett"},
    ]
}

async function UserRepos({ username }: { username: string }) {
    await new Promise((resolve) => setTimeout(resolve, 6000));
  
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
  
    const repos = await response.json();
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo: any) => (
                <div key={repo.id} className="border-2 border-white p-4">
                    <h3 className="text-xl font-playfair text-white">{repo.name}</h3>
                    <p className="text-sm text-white">{repo.description}</p>
                </div>
            ))}
        </div>
    );
  }
export default async function TeamPage({params}: {params: Promise<{username: string}>}) {
    const {username} = await params
    const response = await fetch(`https://api.github.com/users/${username}`, {next: {revalidate: 60}})
    const user = await response.json()

    return (
        <div className="min-h-screen mt-20 p-10">
            <h1 className="text-center text-4xl font-playfair text-white">{user.name}</h1>
            <p className="text-center text-white mt-2">{user.bio}</p>
            <div className="mt-8">
                <UserRepos username={username} />
            </div>
        </div>
    )
}