"use client";

import { useState } from "react";
import { addItemCart, productType } from "../../lib/getCartLocal";
import { useRouter } from "next/navigation";

export default function AddCart({ product }: { product: productType }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter()
  function addToCart() {
    addItemCart(product);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
    router.refresh()
  }
  return (
    <div>
      <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
      {isSuccess && (
        <div className="alert alert-success animate-in fixed bottom-4 w-max left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your Product Added to Cart!</span>
        </div>
      )}
    </div>
  );
}
