import { NoteTakingContext } from "@cyberlofi^_^/app/context/noteTakingContext";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

function NoteTakingToggle() {
  const { isOpenNote, setIsOpenNote } = useContext(NoteTakingContext);
  return (
    <div className="fixed left-10 top-1/2 z-20 -translate-y-1/2">
      <FontAwesomeIcon
        onClick={() => {
          if (setIsOpenNote) {
            setIsOpenNote(!isOpenNote);
          }
        }}
        icon={faPencil}
        className="animate-pulse cursor-pointer text-2xl"
      />
    </div>
  );
}

export default NoteTakingToggle;
