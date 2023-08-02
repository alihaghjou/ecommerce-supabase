"use client"

import { productType } from "../page"

export default function Home() {
    const storage = localStorage.getItem("cart")
    if (!storage) return <div>Cart is Empty</div>
    const data: productType[] = JSON.parse(storage)
  return (
    <div>{data.length}</div>
  )
}
