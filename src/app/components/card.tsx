"use client";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
  cardparagraph: string;
};

type ReadMoreProps = {
  onClose: () => void;
  cardtitle: string;
  cardparagraph: string;
  imglink: string;
};

export default function Card({
  imglink,
  cardtitle,
  cardtext,
  cardparagraph,
}: CardProps) {
  const [generated, setGenerated] = useState(false);

  return (
    <main>
      <div className="fade-onload rounded-xl shadow-lg bg-[#6f4e37] text-[#e7dfd8] transition-all duration-500 hover:bg-transparent hover:text-[#6f4e37] group">
        <Image
          src={imglink}
          alt={cardtitle}
          width={400}
          height={250}
          className="rounded-t-xl transition-all duration-500 group-hover:opacity-80"
        />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-[#6f4e37]">
              {cardtitle}
            </h5>
          </a>
          <p className="mb-3 font-normal group-hover:text-[#6f4e37]">
            {cardtext}
          </p>
          <button
            // on click -> activate generate state to true
            // display modal with more info
            onClick={() => setGenerated(true)}
            className="
    cursor-pointer relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg
    border bg-[#6f4e37] text-[#e7dfd8] border-[#6f4e37]
    transition-[transform,box-shadow,color,background-color] duration-300 ease-out
    hover:scale-[1.03] hover:shadow-[0_10px_24px_-8px_rgba(91,58,41,0.45)]
    overflow-hidden
    before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
    before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]
    before:translate-x-[-120%] before:transition-transform before:duration-700
    hover:before:translate-x-[120%]

    
    group-hover:!bg-[#6f4e37] group-hover:!text-[#e7dfd8] group-hover:!border-[#6f4e37]

    
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]/40
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#e7dfd8]
  "
            aria-label="Read more"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
              viewBox="0 0 14 10"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {generated && (
        <ReadMore
          onClose={() => setGenerated(false)}
          cardtitle={cardtitle}
          imglink={imglink}
          cardparagraph={cardparagraph}
        />
      )}
    </main>
  );
}

function ReadMore({
  onClose,
  imglink,
  cardtitle,
  cardparagraph,
}: ReadMoreProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cardtitle} details`}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal content */}
      {/* Modal content */}
      <div
        className="relative z-10 w-[92vw] max-w-2xl rounded-2xl bg-[#6f4e37] text-[#e7dfd8] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Choose A or B */}
        <div className="relative w-full aspect-[3/2] sm:aspect-video">
          <Image
            src={imglink}
            alt={cardtitle}
            fill
            sizes="(max-width: 640px) 92vw, 640px"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold">{cardtitle}</h3>
          <p className="leading-relaxed">{cardparagraph}</p>
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={onClose}
              className="cursor-pointer inline-flex items-center px-4 py-2 rounded-lg border border-[#e7dfd8]/30 text-[#6f4e37] bg-[#e7dfd8] font-medium hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer absolute top-3 right-3 rounded-full p-2 bg-black/30 hover:bg-black/40 text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
