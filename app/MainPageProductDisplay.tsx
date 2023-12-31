"use client";
import { productType } from "@/lib/getCartLocal";
import Image from "next/image";
import Link from "next/link";

export default function MainPageProductDisplay({
  product,
}: {
  product: productType;
}) {
  if (!product) return;
  return (
    <div className="card w-96 shadow-xl hover:shadow-2xl">
      <figure>
        <Image
          src={product.image}
          alt={product.title}
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
        <p>
          <span className="font-bold">Price:</span>
          {product.price}$
        </p>
        <div className="card-actions justify-end">
          <Link href={`/${product.id}`}>
            <button className="btn btn-outline btn-info">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
