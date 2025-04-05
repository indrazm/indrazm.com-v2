"use client";

import React from "react";
import { CodeBlock, railscast } from "react-code-blocks";
import { JetBrains_Mono } from "next/font/google";

interface Props {
  children: React.ReactNode;
  lang: string | undefined;
}

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const CodeRenderer = ({ children, lang }: Props) => {
  return (
    <div className={`${jetBrainsMono.className} tracking-normal`}>
      <CodeBlock
        text={children as string}
        language={lang}
        showLineNumbers={false}
        theme={railscast}
        customStyle={{ fontSize: "13px", backgroundColor: "rgb(255 255 255 / 0.01)", padding: "20px", border: "1px solid rgb(80 80 80 / 0.2)" }}
      />
    </div>
  );
};
