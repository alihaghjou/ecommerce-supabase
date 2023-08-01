import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MainPageDisplay from "./MainPageDisplay";


export interface product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string
}

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  console.log(cookies)
  const { data: products, error } = await supabase.from("product").select().limit(10);
  if (error) throw new Error(error.message)
  return (
    <MainPageDisplay products={products} />
  );
}
