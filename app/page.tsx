import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
export default function Home() {
  return (
    <main className="text-center space-y-6">
      <h1 className="bg-gradient-to-b from-purple-800 to-pink-200 bg-clip-text text-transparent font-extrabold text-7xl tracking-tighter leading-tight">
        Versewell
        <br />
        Where Stories Converge
      </h1>
      <p className="text-gray-400 text-xl w-[70%] mx-auto">
        Create and connect stories in a collaborative web of characters, places,
        and ideas. Share your imagination while keeping full control over your
        creations
      </p>
      {/* <p className="font-extrabold text-purple-600 font-sans text-2xl">
        Explore | Write | Connect
      </p> */}

      <div className="flex gap-4 justify-center">
        <Button variant={"primary"} className="hover:bg-purple-500 font-bold">
          <LogIn />
          sign up
        </Button>
        <Button className="border-2 border-purple-600 bg-transparent font-bold">
          explore
        </Button>
      </div>
    </main>
  );
}
