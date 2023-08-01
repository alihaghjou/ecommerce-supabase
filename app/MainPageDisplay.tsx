"use client";
import Image from "next/image";
import Link from "next/link";
import { product } from "./page";
import LogoutButton from "./LogoutButton";
import { User } from "@supabase/supabase-js";

export default function MainPageDisplay({ products, user }: { products: product[], user: User | null }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 animate-in">
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )}
      </div>
      {products?.map((product: product) => (
        <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={product.image}
              alt="Shoes"
              width={256}
              height={256}
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/${product.id}`}>
                <button className="btn btn-outline btn-info">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
