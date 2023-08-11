"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NumberOfEachItem, eachItem } from "../../lib/getCartLocal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Database } from "@/supabase";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const [cart, setCart] = useState<eachItem[]>([]);
  useEffect(() => {
    setCart(NumberOfEachItem());
  }, []);

  function emptyCart() {
    localStorage.removeItem("cart");
    setCart([]);
    router.push("/");
  }

  const sendCart = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    console.log(cart);
    emptyCart();
  };

  if (cart.length === 0)
    return <div className="text-center">Cart is Empty</div>;
  return (
    <div className="p-4">
      <button className="btn btn-success" onClick={sendCart}>
        Send cart
      </button>
      <button className="btn btn-warning" onClick={emptyCart}>
        Empty Cart
      </button>
      <section className="flex flex-col gap-5 py-4">
        {cart.map((item, i) => (
          <article key={i}>
            <div className="card card-side shadow-xl">
              <figure>
                <Image src={item.image} alt="Movie" className="h-full w-full" width={256} height={256} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>Price: {item.price}$</p>
                Items In Cart: {item.numberOfItems}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
