"use client";

import { productType } from "@/lib/getCartLocal";
import MainPageProductDisplay from "./MainPageProductDisplay";
import MainPageSearch from "./MainPageSearch";

export default function MainPageDisplay({
  products,
}: {
  products: productType[];
}) {
  if (!products) return;
  return (
    <main className="flex min-h-screen items-center flex-wrap gap-8 justify-center p-24 animate-in">
      <MainPageSearch />
      <section className="flex items-center flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <MainPageProductDisplay key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
