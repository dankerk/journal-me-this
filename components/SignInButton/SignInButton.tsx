"use client"
import { signIn } from "next-auth/react";

interface SignInButtonProps {
  children: React.ReactNode;
}

export const SignInButton = ({ children }: Readonly<SignInButtonProps>) => {
  return <button onClick={() => signIn()}>{children}</button>;
};
