import { Database } from "@/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Index({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams) return <div>No Query</div>;
  if (searchParams.query === undefined) return;
  const modified = searchParams.query.replace("_", " ");
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: searchProducts, error } = await supabase
    .from("product")
    .select()
    .ilike("title", `%${modified}%`);
  return (
    <main className="flex flex-col gap-6 py-3">
      <h1 className="text-center text-xl">Search Result</h1>
      <section className="flex flex-wrap items-center justify-center gap-6">
      {searchProducts?.map((product) => (
        <div key={product.id} className="card w-96 shadow-xl hover:shadow-2xl">
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
      ))}
      </section>
    </main>
  );
}
