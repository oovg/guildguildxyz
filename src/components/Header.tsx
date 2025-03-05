import Link from "next/link";
import Hamburger from "@/components/Navigation/Hamburger";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-row justify-between p-8">
        <Link href="/">
          <div className="flex flex-row gap-4 items-end">
            <p className="text-3xl">GG</p>
            <p>Guild Guild</p>
          </div>
        </Link>

        <div className="flex flex-row gap-4">
          <ThemeToggle />
          <Hamburger />
        </div>
      </div>
    </main>
  );
}
