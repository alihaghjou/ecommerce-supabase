"use client"
import { productType } from "../app/page";

export function getCartItems(): productType[] {
  if (typeof window === undefined) return []
  const storage = localStorage.getItem("cart");
  if (!storage) return [];
  return JSON.parse(storage);
}

export function addItemCart(product: productType) {
  const storage = getCartItems();
  if (storage) {
    const prev = storage;
    const newData = [...prev, product];
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(newData));
  } else {
    localStorage.setItem("cart", JSON.stringify([product]));
  }
}
