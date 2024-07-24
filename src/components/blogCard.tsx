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
      <main className="p-12 cursor-pointer bg-slate-700/30 hover:bg-blue-900/20 active:bg-blue-900/10 border-b-2 flex flex-col justify-between h-60 border-transparent hover:border-blue-600 transition duration-200">
        <h2 className="text-2xl">{title}</h2>
        <p className="tracking-tighter text-sm font-medium text-slate-600">{date}</p>
      </main>
    </Link>
  );
};
