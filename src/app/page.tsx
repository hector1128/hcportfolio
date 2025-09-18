import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12">
      <div className="flex flex-row justify-around gap-35 font-sans text-lg font-bold pb-10">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CAREER</p>
        <p>PROJECTS</p>
      </div>

      <div className="grid grid-cols-2 m-10 border border-black outline-offset-20">
        <div>
          <p className="text-6xl pb-8">Hector Cordero</p>
          <p className="pb-20">
            On a journey to make the <b>world</b> a better place...
          </p>
        </div>
        <div>
          <Image
            src="/home/hectorimg.jpg"
            alt="Hector Cordero"
            width={400}
            height={400}
            className="square-full "
          />
        </div>
      </div>
    </main>
  );
}
