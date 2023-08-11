"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {AiOutlineSearch} from "react-icons/ai"

export default function HeaderSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const modified = search.replace(" ", "_");
    router.push(`/search?query=${modified}`);
  }
  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex w-full bg-gray-200 rounded">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="input focus:outline-none w-full max-w-sm bg-gray-200"
        placeholder="Search"
      />
      <button type="submit"><AiOutlineSearch size="25px" color="gray" /></button>
    </form>
  );
}
