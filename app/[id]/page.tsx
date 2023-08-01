import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: product } = await supabase
    .from("product")
    .select()
    .eq("id", params.id)
    .limit(1)
    .maybeSingle();

  return <div>{product.title}</div>;
}
