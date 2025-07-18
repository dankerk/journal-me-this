"use client";
import { Header, Footer, MediaUploadForm, SignInButton } from "@/components";
import SessionData from "@/components/SessionData/SessionData";
import { auth } from "../../lib";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await auth();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {session ? <SessionData /> : <div><p>Not authenticated, bro.</p><SignInButton>Login or register</SignInButton></div>}
      </main>
      <Footer />
    </div>
  );
}
