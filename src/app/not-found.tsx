import Link from "next/link";
export default function NotFound() {
  return (
    <main className="p-12 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <h1 className="pb-7 text-4xl md:text-6xl text-[#6f4e37] mb-4">
        404 - Page Not Found
      </h1>
      <p className="pb-3 text-lg md:text-2xl text-[#6f4e37]">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="pb-8 text-lg md:text-2xl text-[#6f4e37]">
        Why don't you head back home?
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-[#6f4e37] text-white rounded hover:bg-[#5b3a29] transition-colors"
      >
        Home
      </Link>
    </main>
  );
}
