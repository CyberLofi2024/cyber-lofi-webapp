import React from "react";

function NoteCollection() {
  const noteList = [
    {
      id: 1,
      title: "Note 1",
      content: "code everyday",
    },
    {
      id: 2,
      title: "Note 2",
      content: "code everyday",
    },
    {
      id: 3,
      title: "Note 3",
      content: "code everyday",
    },
    {
      id: 4,
      title: "Note 4",
      content: "code everyday",
    },
    {
      id: 5,
      title: "Note 5",
      content: "code everyday",
    },
  ];
  const onRenderNoteList = () => {
    return noteList.map((item) => {
      return (
        <div
          key={item.id}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black hover:bg-white/80"
        >
          <p className="">{item.title[0].toLocaleUpperCase()}</p>
        </div>
      );
    });
  };
  return <div className="flex flex-col gap-2">{onRenderNoteList()}</div>;
}

export default NoteCollection;
