import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MainPageDisplay from "./MainPageDisplay";
import { Database } from "@/supabase";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  const { data: products, error } = await supabase
    .from("product")
    .select()
    .limit(10);
  if (error || products === null) throw new Error(error.message);

  const {data: filtered} = await supabase.from("product").select().eq("category", "book")
  console.log(filtered)
  return (
      <MainPageDisplay products={products} />
  );
}
