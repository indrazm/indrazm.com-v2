/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from "mdx/types";
import { CodeRenderer } from "./components/mdx/code-renderer";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: "40px" }} className="text-zinc-200 text-balance leading-relaxed">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "24px" }} className="text-zinc-400 leading-relaxed">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 style={{ fontSize: "18px", color: "#f1f1f1" }}>{children}</h3>,
    p: ({ children }) => (
      <p style={{ fontSize: "15px" }} className="leading-1">
        {children}
      </p>
    ),
    img: ({ src, alt }) => <img src={src} alt={alt} width={1000} height={1000} style={{ borderRadius: "6px" }} />,
    strong: ({ children }) => <strong style={{ color: "white" }}>{children}</strong>,
    ol: ({ children }) => <ol className="list-decimal list-outside">{children}</ol>,
    ul: ({ children }) => <ul className="list-disc list-outside space-y-2">{children}</ul>,
    li: ({ children }) => {
      return (
        <li className="list-item list-disc ">
          <div>- {children}</div>
        </li>
      );
    },
    code: ({ children, className }) => {
      const language = className?.replace("language-", "");
      return <CodeRenderer lang={language}>{children}</CodeRenderer>;
    },
    a: ({ href, children }) => {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "rgb(59 130 246)" }}>
          {children}
        </a>
      );
    },
    ...components,
  };
}
