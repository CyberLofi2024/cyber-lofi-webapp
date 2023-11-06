import { INoteData } from "@cyberlofi^_^/types/allTypes";
import { useHotkeys } from "@mantine/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function NoteTaking() {
  const searchParams = useSearchParams();
  const isOpenNoteTaking = searchParams?.get("note");
  const noteDataInitial: INoteData = JSON.parse(
    localStorage.getItem("NOTE-DATA") as string
  );
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const router = useRouter();

  useHotkeys([
    [
      "Escape",
      () => {
        const noteData: INoteData = {
          title: noteTitle ?? noteDataInitial?.title,
          content: noteContent ?? noteDataInitial?.content,
        };
        localStorage.setItem("NOTE-DATA", JSON.stringify(noteData));
        setTimeout(() => {
          router.push(`/`);
        }, 500);
      },
    ],
  ]);

  return isOpenNoteTaking === "true" ? (
    <div className="fixed bottom-0 left-0 right-0 top-10 z-10 md:right-1/3 md:top-20 lg:right-1/2 lg:top-0">
      <div className="mx-8 my-10 flex h-4/5 ">
        <form className="paper">
          <div className="lines">
            <div
              className="title"
              contentEditable
              spellCheck="true"
              onInput={(e) => {
                setNoteTitle((e.target as HTMLElement).innerText);
              }}
              suppressContentEditableWarning={true}
            >
              {noteDataInitial?.title ?? ""}
            </div>
            <div
              className="text"
              contentEditable
              spellCheck="true"
              suppressContentEditableWarning={true}
              onInput={(e) => {
                setNoteContent((e.target as HTMLElement).innerText);
              }}
            >
              {noteDataInitial?.content ?? ""}
            </div>
          </div>
          <div className="holes hole-top" />
          <div className="holes hole-middle" />
          <div className="holes hole-bottom" />
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default NoteTaking;
