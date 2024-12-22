"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

const Editor = () => {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Edit me to compose your writings..",
        props: {
          level: 2,
        },
      },
    ],
  });

  return <BlockNoteView editor={editor} />;
};

export default Editor;
