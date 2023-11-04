import { useSearchParams } from "next/navigation";
import React from "react";
import NoteEditor from "./NoteEditor";
import NoteCollection from "./NoteCollection";

function NoteTaking() {
  const searchParams = useSearchParams();
  const isOpenNoteTaking = searchParams?.get("note");
  return isOpenNoteTaking === "true" ? (
    <div className="fixed bottom-0 left-0 right-1/2 top-0 z-10">
      <div className="mx-8 my-10 flex gap-3 overflow-auto">
        <NoteCollection />
        <NoteEditor />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default NoteTaking;
