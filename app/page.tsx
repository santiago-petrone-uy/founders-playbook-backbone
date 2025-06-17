// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

// A Client Component to handle the sign-out action
function SignOutButton() {
  // The form action will be handled by the server action below
  return (
    <form action="/auth/signout" method="post">
      <Button type="submit">Sign Out</Button>
    </form>
  );
}

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-4">
        {user ? (
          <>
            <h1 className="text-2xl">
              Welcome back, <span className="font-bold">{user.email}</span>!
            </h1>
            <p>You are now logged in and "inside" the application.</p>
            <SignOutButton />
          </>
        ) : (
          <>
            <h1 className="text-2xl">You Are Not Logged In</h1>
            <p>Please log in to see the protected content.</p>
            <Button asChild>
              <Link href="/login">Go to Login Page</Link>
            </Button>
          </>
        )}
      </div>
    </main>
  );
}