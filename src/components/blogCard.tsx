import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
  title: string;
  date: string;
}

export const BlogCard = ({ title, slug, date }: Props) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <main className="p-8 cursor-pointer bg-neutral-800/[0.08] hover:bg-neutral-700/10 active:bg-neutral-900/10 border-b-2 flex flex-col justify-between min-h-48 border-transparent hover:border-yellow-300 transition duration-200">
        <h2 className="text-lg text-balance">{title}</h2>
        <p className="tracking-tighter text-sm font-medium text-neutral-600">{date}</p>
      </main>
    </Link>
  );
};
