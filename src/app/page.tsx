import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12">
      <div className="flex flex-row justify-around gap-35 font-sans text-lg font-bold pb-10">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/career">CAREER</Link>
        <Link href="/projects">PROJECTS</Link>
      </div>

      <div className="grid grid-cols-2 m-10 border border-black outline-offset-20 p-10">
        <div>
          <p className="text-4xl pb-8 md:text-6xl">HECTOR CORDERO</p>
          <p className="pb-60">
            On a journey to make the <b>world</b> a better place...
          </p>
          <div className="flex gap-5">
            <Link href="https://www.github.com/hector1128">
              <Image
                src="/home/github-logo.png"
                alt="GitHub Logo"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/hectorhcordero/">
              <Image
                src="/home/linkedin-logo.png"
                alt="LinkedIn Logo"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="/home/Resume2025.pdf">
              <Image
                src="/home/resume-logo.png"
                alt="Twitter Logo"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
        </div>
        <div className="md:block">
          <div className="flex justify-end">
            <Image
              src="/home/hectorimg.jpg"
              alt="Hector Cordero"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
