"use client";

import React from "react";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

export const Scroll = ({ children }: React.PropsWithChildren) => {
  return (
    <ScrollContainer>
      <div className="h-[110vh] px-12 pb-12">{children}</div>
    </ScrollContainer>
  );
};
