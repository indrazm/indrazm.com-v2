import React from "react";

interface Props {
  company: string;
  position: string;
  year: string;
  isOnsite?: boolean;
  isActive?: boolean;
}

export const ExperienceCard = ({ company, position, year, isOnsite, isActive }: Props) => {
  return (
    <main className="flex justify-between items-end border border-zinc-800 hover:bg-zinc-800 p-4 transition-all duration-100">
      <div>
        <div className="flex items-center gap-2">
          <div className="font-semibold text-white">{company}</div>
        </div>
        <p className="text-neutral-500 text-sm">{position}</p>
      </div>
      <div className="flex flex-col items-end ga2">
        <div className="font-medium text-zinc-500 text-sm tracking-normal">{year}</div>
      </div>
    </main>
  );
};
