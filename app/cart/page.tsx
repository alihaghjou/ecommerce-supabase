"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getCartItems } from "../../lib/getCartLocal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const supabase = createClientComponentClient();

  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const sendCart = async () => {
    const { data: {user} } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login")
      return
    };
    console.log(cart);
    
  };

  if (!cart) return <div>Cart is Empty</div>;
  return (
    <div>
      {cart.length} <button className="btn btn-outline" onClick={sendCart} disabled={cart.length === 0 ? true : false}>Send cart</button>
    </div>
  );
}
