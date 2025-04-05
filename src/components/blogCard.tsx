import Link from "next/link";
import React from "react";
import { HyperText } from "./magicui/hyper-text";

interface Props {
  slug: string;
  title: string;
  date: string;
}

export const BlogCard = ({ title, slug, date }: Props) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <main className="group pb-2 border-b border-transparent lg:hover:border-indigo-600 cursor-pointer flex lg:flex-row flex-col justify-between transition duration-200">
        <h2 className="group-hover:text-indigo-500 text-base text-balance text-zinc-400 font-normal transition-all duration-150">{title}</h2>
        <p className="text-xs lg:text-sm font-medium text-zinc-600 lg:text-zinc-400">{date}</p>
      </main>
    </Link>
  );
};
