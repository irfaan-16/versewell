/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Editor from "@/components/DynamicEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Hash, Send, SquarePlus } from "lucide-react";

import { Suspense, useRef, useState } from "react";
const Loading = () => {
  return <h1 className="text-3xl text-white">Loading the Editor....⌛</h1>;
};

const page = () => {
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement>(null);
  const triggerShake = () => {
    // Add the shake class
    tagRef.current?.classList.add("animate-shake");

    // Remove the class after the animation ends
    const handleAnimationEnd = () => {
      tagRef.current?.classList.remove("animate-shake");
      tagRef.current?.removeEventListener("animationend", handleAnimationEnd);
    };

    tagRef.current?.addEventListener("animationend", handleAnimationEnd);
  };

  const handleAddTag = () => {
    const tagName = tagRef.current?.value;

    if (tags.includes(tagName!)) {
      return;
    }
    if (!tagName?.trim().length) {
      console.log("Tag cannot be empty!!");
      triggerShake();
      return;
    }
    setTags((prev) => [...prev, tagName]);
    if (tagRef.current) {
      tagRef.current.value = "";
    }
  };

  return (
    <section className="max-w-screen-lg mx-auto">
      <h2 className="text-5xl text-purple-400 font-extrabold mb-5">Compose!</h2>

      <div className="mb-3">
        <Label htmlFor="title" className="text-white text-xl font-bold mb-2">
          Title
        </Label>
        <Input
          id="title"
          type="text"
          className="text-white border-2 border-gray-500  focus:border-purple-900"
        />
      </div>

      {/* Tags */}
      <div>
        <div>
          <Label htmlFor="tags" className="text-white text-xl font-bold mb-2">
            tags
          </Label>
          <div className="flex gap-4">
            <Input
              type="text"
              id="tags"
              className="text-white border-2 border-gray-500 max-w-60 focus:border-purple-900 "
              ref={tagRef}
            />
            <Button
              variant="primary"
              className="font-bold hover:bg-purple-900"
              onClick={handleAddTag}
            >
              <SquarePlus />
              add
            </Button>
          </div>
        </div>
        <div className="my-4 flex gap-3 flex-wrap">
          {tags.length > 0 ? (
            tags.map((tag) => {
              return (
                <p
                  key={tag}
                  className="text-white py-2 px-3 bg-white/5 rounded-sm font-bold"
                >
                  <Hash
                    size={16}
                    color="#8000ff"
                    strokeWidth={2.75}
                    className="inline"
                  />{" "}
                  {tag}
                </p>
              );
            })
          ) : (
            <p className="text-white">
              no tags (add some tags to your writing!)
            </p>
          )}
        </div>
      </div>

      {/* Editor */}
      <Suspense fallback={<Loading />}>
        <Editor />
      </Suspense>

      <div className="space-x-3 mt-4">
        <Button className="font-bold">
          <Download size={16} strokeWidth={3} />
          save draft
        </Button>
        <Button variant={"primary"} className="font-bold hover:bg-purple-900">
          <Send size={16} strokeWidth={3} />
          publish
        </Button>
      </div>
    </section>
  );
};

export default page;
