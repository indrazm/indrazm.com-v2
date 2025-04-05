import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl m-auto my-12 pb-12">
      <Link href="/" className="mb-12 hover:text-white text-sm font-medium flex gap-2 items-center transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <g fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 6l-6 6l6 6" />
          </g>
        </svg>
        Back to Home
      </Link>
      <div className="space-y-8">{children}</div>
    </main>
  );
}
