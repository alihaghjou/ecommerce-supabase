"use client";

import Link from "next/link";
import LogoutButton from "./Components/LogoutButton";
import { User } from "@supabase/supabase-js";
import { getCartItems } from "../lib/getCartLocal";
import { useEffect, useState } from "react";

export default function Header({ user }: { user: User | null }) {
  const [cartLength, setCartLength] = useState(0)
  useEffect(() => {
    setCartLength(getCartItems().length)
  }, [])
  return (
    <header className="p-4 border-b-2 mx-1 flex justify-between items-center">
      <Link href="/cart" className="indicator">
        <span className="indicator-item badge badge-secondary">
          {cartLength}
        </span>
        <button className="text-xl">Cart</button>
      </Link>
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
