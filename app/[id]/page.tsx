import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { product } from "../page";
import Link from "next/link";

export default async function page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("product")
    .select()
    .eq("id", params.id)
    .limit(1)
    .maybeSingle();
  const product: product = data;
  return (
    <main className="flex flex-col justify-center gap-6 items-center py-10">
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
            {product.title}
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
    </main>
  );
}
