import type { MDXComponents } from "mdx/types";
import { CodeRenderer } from "./components/mdx/code-renderer";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: "40px" }} className="text-neutral-200 text-balance leading-relaxed">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "20px" }} className="text-neutral-200 leading-relaxed">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: "16px" }} className="text-neutral-200 leading-relaxed">
        {children}
      </h3>
    ),
    p: ({ children }) => <p>{children}</p>,
    strong: ({ children }) => <strong style={{ color: "white" }}>{children}</strong>,
    li: ({ children }) => {
      return <li className="ml-4">- {children}</li>;
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
