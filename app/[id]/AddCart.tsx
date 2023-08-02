"use client";

import type { productType } from "../page";

export default function AddCart({ product }: { product: productType }) {
  function addToCart() {
    const storage = localStorage.getItem("cart");
    if (storage) {
      const prev = JSON.parse(storage);
      const newData = [...prev, product];
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(newData));
    } else {
      localStorage.setItem("cart", JSON.stringify([product]));
    }
  }
  return <button onClick={addToCart}>Add to Cart</button>;
}
