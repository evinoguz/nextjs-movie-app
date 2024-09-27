"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "En Favori",
      url: "top_rated",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-7 bg-gray-100 dark:bg-gray-900 p-5 m-5">
      {tabs?.map((item, i) => (
        <Link
          href={`/?genre=${item.url}`}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            genre
              ? item.url === genre
                ? "underline underline-offset-8 text-amber-600"
                : ""
              : i === 0
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          key={i}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
