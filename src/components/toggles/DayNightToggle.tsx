import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export const DayNightToggle = (input: {
  label: string;
  onClick: Function;
  isToggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const { onClick, isToggled, toggle } = input;

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <button
      className={`${
        isToggled
          ? "bg-yellow-100 shadow-red-500"
          : "bg-indigo-900 shadow-blue-500"
      } mr-2 flex h-7 w-7 items-center justify-center rounded-full p-2 shadow-inner md:w-14 md:justify-start`}
      onClick={callback}
      title="Dark-Light Switcher"
    >
      <FontAwesomeIcon
        icon={isToggled ? faCloudSun : faMoon}
        className={`${isToggled ? "text-amber-600" : "text-emerald-500"} ${
          isToggled ? "md:translate-x-0" : "md:translate-x-7"
        } text-[1rem] transition-all duration-500`}
      />
    </button>
  );
};
