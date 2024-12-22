import Link from "next/link";
import { NotebookPen, PencilLine } from "lucide-react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
const NAV_LINKS = ["about", "components", "dashboard", "uses", "docs"];

const Navbar = () => {
  return (
    <header className="bg-white/5 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors font-geist-mono">
      <Link href="/" className="flex gap-2 items-center">
        <NotebookPen stroke="purple" />
        <h2 className="font-bold text-white text-xl">versewell</h2>
      </Link>
      <nav className="flex gap-4 items-center">
        <ul className="hidden  md:flex items-center gap-7">
          {NAV_LINKS.map((link, idx) => {
            return (
              <li
                key={idx + link}
                className="cursor-pointer text-gray-400 hover:text-purple-700 transition font-bold"
              >
                <Link href={link}>{link}</Link>
              </li>
            );
          })}
          <li>
            <Link href="/compose">
              <Button variant={"primary"} className="font-bold">
                <PencilLine />
                write
              </Button>
            </Link>
          </li>
        </ul>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-12 h-12",
              },
            }}
          />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Navbar;
