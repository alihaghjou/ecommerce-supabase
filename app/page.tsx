import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";

interface product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data: products, error } = await supabase.from("product").select().limit(10);
  console.log(error)
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
              <button className="btn btn-outline btn-info">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
