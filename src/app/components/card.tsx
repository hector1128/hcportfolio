import Image from "next/image";

type CardProps = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
};

export default function Card({ imglink, cardtitle, cardtext }: CardProps) {
  return (
    <div className="rounded-xl shadow-lg">
      <Image
        src={imglink}
        alt={cardtitle}
        width={400}
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#6f4e37]">
            {cardtitle}
          </h5>
        </a>
        <p className="mb-3 font-normal text-[#6f4e37]">{cardtext}</p>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#ffffff] bg-[#6f4e37] rounded-lg hover:bg-[#8d6a4a] focus:ring-4 focus:outline-none focus:ring-[#6f4e37]/30 transition-all duration-200"
        >
          Read more
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
