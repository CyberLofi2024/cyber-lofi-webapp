import { NoteTakingContext } from "@cyberlofi^_^/app/context/noteTakingContext";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

function NoteTaking() {
  const { isOpenNote } = useContext(NoteTakingContext);
  return isOpenNote ? (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10">
      <div className="grid-row-1 m-10 grid max-h-[80vh] grid-flow-row gap-3 overflow-auto rounded-xl bg-white/20 p-5 md:grid-cols-3">
        <div className="rounded-xl bg-red-300 p-3 text-blue-900">
          <h2 className="text-xl font-bold">Example</h2>
          <p className="text-sm">Wednesday 1st, November,2023</p>
          <p className="pt-3 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quis provident excepturi libero vel quasi optio, fugiat maxime
            ullam. Reprehenderit error atque sit repellendus ratione commodi id
            nostrum enim tenetur.
          </p>
        </div>
        <div className="rounded-xl bg-orange-300 p-3 text-blue-900">
          <h2 className="text-xl font-bold">Example</h2>
          <p className="text-sm">Wednesday 1st, November,2023</p>
          <p className="pt-3 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quis provident excepturi libero vel quasi optio, fugiat maxime
            ullam. Reprehenderit error atque sit repellendus ratione commodi id
            nostrum enim tenetur.
          </p>
        </div>
        <div className="group flex w-auto cursor-pointer items-center justify-center rounded-xl bg-white p-3">
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="h-12 w-12 px-20 py-28 text-blue-900 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default NoteTaking;
