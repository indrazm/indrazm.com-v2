"use client";

import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

interface Props {
  children: React.ReactNode;
  lang: string | undefined;
}

export const CodeRenderer = ({ children, lang }: Props) => {
  return (
    <CodeBlock
      text={children as string}
      language={lang}
      showLineNumbers={false}
      theme={dracula}
      customStyle={{ fontSize: "12px", backgroundColor: "rgb(30 41 59 / 0.3)", padding: "20px", borderRadius: "10px" }}
    />
  );
};
