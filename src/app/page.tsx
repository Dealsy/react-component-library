import Link from "next/link";
import { Routes } from "@/helpers/routes";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-20 p-24">
      <h1 className="text-4xl">Component Links</h1>
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <ul className="flex flex-col gap-2 text-blue-300">
          {Routes.map(({ path, name }) => (
            <li className="hover:text-blue-400" key={name}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
