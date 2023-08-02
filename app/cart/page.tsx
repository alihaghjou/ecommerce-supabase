"use client";

import { getCartItems } from "../../lib/getCartLocal";

export default function Home() {
  const cart = getCartItems();
  if (!cart) return <div>Cart is Empty</div>;
  return <div>{cart.length}</div>;
}
