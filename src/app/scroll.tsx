"use client";

import React from "react";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

export const Scroll = ({ children }: React.PropsWithChildren) => {
  return (
    <ScrollContainer continuousScrolling>
      <div className="h-[105vh] px-12 pb-12">{children}</div>
    </ScrollContainer>
  );
};
