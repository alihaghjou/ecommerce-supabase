"use client";
export type productType = {
  category: "digital" | "book" | "clothe" | "shoe";
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
};

type numberOfItems = {numberOfItems: number}
export interface eachItem extends productType, numberOfItems{}

export function getCartItems(): productType[] {
  if (typeof window === undefined) return [];
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

export function NumberOfEachItem() {
  const storage = getCartItems();
  const NonReapetArray: productType[] = [
    ...new Map(storage.map((m) => [m.id, m])).values(),
  ];
  const array = NonReapetArray.map((item) => ({
    ...item,
    numberOfItems: Number(item, storage),
  }));
  return array;
}

function Number(item: productType, array: productType[]) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (item.id === array[i].id) num++;
  }
  return num;
}
