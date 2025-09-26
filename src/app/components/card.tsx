import Image from "next/image";

type CardProps = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
};

export default function Card({ imglink, cardtitle, cardtext }: CardProps) {
  return (
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
        <a
          href="#"
          className="
    relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg
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
          Read more
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
        </a>
      </div>
    </div>
  );
}
