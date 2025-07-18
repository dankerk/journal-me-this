import { SignInButton } from "@/components";
import { auth } from "../lib";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <main>
        {session ? (
          <p>Welcome {session.user?.name}</p>
        ) : (
          <div>
            <p>Not authenticated, bro.</p>
            <SignInButton>Login or register</SignInButton>
          </div>
        )}
      </main>
    </div>
  );
}
