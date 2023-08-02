"use client";
import Image from "next/image";
import Link from "next/link";
import { product } from "./page";

export default function MainPageDisplay({ products }: { products: product[] }) {
  return (
    <main className="flex min-h-screen items-center flex-wrap gap-8 justify-center p-24 animate-in">
      {products?.map((product: product) => (
        <div key={product.id} className="card w-96 shadow-xl">
          <figure>
            <Image
              src={product.image}
              alt="Shoes"
              width={256}
              height={256}
              className="w-full h-72"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title capitalize">{product.title}</h2>
            <p className="line-clamp-2">
              <span className="font-bold">Description: </span>
              {product.description}
            </p>
            <p><span className="font-bold">Price:</span>{product.price}</p>
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
