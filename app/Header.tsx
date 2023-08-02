"use client";

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { User } from "@supabase/supabase-js";

export default function Header({ user }: { user: User | null }) {
  return (
    <header className="p-4 border-b-2 mx-1 flex justify-end items-center">
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <LogoutButton />
        </div>
      ) : (
        <Link href="/login">
          <button className="btn btn-accent">Login</button>
        </Link>
      )}
    </header>
  );
}
