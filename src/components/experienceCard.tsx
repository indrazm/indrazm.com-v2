import React from "react";

interface Props {
  company: string;
  position: string;
  year: string;
  isOnsite?: boolean;
}

export const ExperienceCard = ({ company, position, year, isOnsite }: Props) => {
  return (
    <main className="flex justify-between items-end">
      <div>
        <div className="flex items-center gap-2">
          <div className="font-semibold text-white">{company}</div>
          {isOnsite ? (
            <div className="text-xs font-semibold px-2 py-1.5 rounded-md bg-slate-900">ONSITE</div>
          ) : (
            <div className="text-xs font-semibold px-2 py-1.5 rounded-md bg-slate-900">REMOTE</div>
          )}
        </div>
        <p className="text-slate-600">{position}</p>
      </div>
      <div className="text-lg font-medium text-white tracking-tighter">{year}</div>
    </main>
  );
};