import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MainPageDisplay from "./MainPageDisplay";
import Header from "./Header";

export interface productType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
//TODO: make the database schema for the purchesed data based on amount of sent products and user
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: products, error } = await supabase
    .from("product")
    .select()
    .limit(10);
  if (error) throw new Error(error.message);
  return (
    <>
      <Header user={user} />
      <MainPageDisplay products={products} />;
    </>
  );
}
