"use client";

import React from "react";
import { CodeBlock, anOldHope } from "react-code-blocks";

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
      theme={anOldHope}
      customStyle={{ fontSize: "14px", backgroundColor: "rgb(255 255 255 / 0.01)", padding: "20px", border: "1px solid rgb(80 80 80 / 0.2)" }}
    />
  );
};
