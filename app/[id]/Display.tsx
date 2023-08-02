"use client"
import Image from "next/image";
import Link from "next/link";
import AddCart from "./AddCart";
import type { productType } from "../page";

export default function Display({product}: {product: productType}) {
  return (
    <main className="flex flex-col justify-center gap-6 items-center py-10 animate-in">
    <Link className="self-start px-6" href="/">
      Home
    </Link>
    <div className="flex flex-col md:flex-row gap-10">
      <Image
        src={product.image}
        alt={product.title}
        width={512}
        height={512}
        className="rounded"
      />
      <section className="flex flex-col gap-6 text-xl">
        <h1>
          <span className="font-bold">Title: </span>
          <span className="capitalize">{product.title}</span>
        </h1>
        <h2>
          <span className="font-bold">Price: </span>
          {product.price}
        </h2>
      </section>
    </div>
    <p className="text-gray-900 text-left text-xl">
      <span className="font-bold">Description: </span>
      {product.description}
    </p>
    <AddCart product={product} />
  </main>
  )
}
