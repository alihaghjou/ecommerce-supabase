"use client";

import { productType } from "@/lib/getCartLocal";
import MainPageProductDisplay from "./MainPageProductDisplay";

export default function MainPageDisplay({
  products,
}: {
  products: productType[];
}) {
  if (!products) return;
  return (
    <main className="flex min-h-screen items-center flex-wrap gap-8 justify-center p-24 animate-in">
      <section className="flex items-center flex-wrap gap-8 justify-center">
        {products.map((product, i) => (
          <MainPageProductDisplay key={i} product={product} />
        ))}
      </section>
    </main>
  );
}
