import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from "next/headers"

export default async function Home() {
  const supabase = createServerComponentClient({cookies})

  const ob = await supabase.from("product").select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="btn btn-outline btn-info">Info</button>
    </main>
  )
}
