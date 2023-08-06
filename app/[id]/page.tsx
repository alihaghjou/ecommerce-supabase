import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Display from "./Display";

export default async function page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: product, error } = await supabase
    .from("product")
    .select()
    .eq("id", params.id)
    .limit(1)
    .maybeSingle();

    if (product === null) throw new Error(error?.message)
  return (
    <Display product={product} />
  );
}
