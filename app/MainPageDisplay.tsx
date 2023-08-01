"use client"
import Image from "next/image";
import Link from "next/link";
import { product } from './page'

export default function MainPageDisplay({products}: {products: product[]}) {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
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
              <Link href={`/${product.id}`}><button className="btn btn-outline btn-info">Buy Now</button></Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
