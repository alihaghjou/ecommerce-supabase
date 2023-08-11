"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function MainPageSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const modified = search.replace(" ", "_");
    router.push(`/search?query=${modified}`);
  }
  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex w-full">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="input w-full max-w-xs bg-gray-200"
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}
