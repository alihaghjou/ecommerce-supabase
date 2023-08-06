"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getCartItems, productType } from "../../lib/getCartLocal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Database } from "@/supabase";

export default function Home() {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>();

  const [cart, setCart] = useState<productType[]>([]);
  useEffect(() => {
    setCart(getCartItems());
  }, []);

  function emptyCart() {
    localStorage.removeItem("cart")
    setCart([])
    router.push("/")
  }

  const sendCart = async () => {
    const { data: {user} } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login")
      return
    };
    console.log(cart);
    emptyCart()
  };

  if (cart.length === 0) return <div className="text-center">Cart is Empty</div>;
  return (
    <div>
      {cart.length} 
      <button className="btn btn-success" onClick={sendCart}>Send cart</button>
      <button className="btn btn-warning" onClick={emptyCart}>Empty Cart</button>
    </div>
  );
}
