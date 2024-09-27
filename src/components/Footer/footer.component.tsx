import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DayNightToggle } from "../toggles/DayNightToggle";
import { useDate } from "@cyberlofi^_^/hooks/useDate";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import DecorationAndOthers from "./DecorationAndOthers/DecorationAndOthers";
import ScreenTools from "./ScreenTools/ScreenTools";
import UserAndSetting from "./UserAndSetting/UserAndSetting";
import Link from "next/link";

interface Props {
  logState: (state: boolean) => void;
  isAudioPlayed: boolean;
  setIsAudioPlayed: Dispatch<SetStateAction<boolean>>;
  isToggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  isAudioMuted: boolean;
  setIsAudioMuted: Dispatch<SetStateAction<boolean>>;
}

function FooterComponent({
  logState,
  isAudioPlayed,
  setIsAudioPlayed,
  isToggled,
  toggle,
  isAudioMuted,
  setIsAudioMuted,
}: Props) {
  const datetime = useDate();
  const [locations, setLocation] = useState("");

  const getCurrentTime = (input: any) => {
    const timeWithoutSeconds = String(input?.time).split(":");
    timeWithoutSeconds.pop();
    return `${timeWithoutSeconds.join(":")} ${input?.time.slice(-2)}`;
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    fetch("https://ipinfo.io/json?token=aa0dcfa79c8a0c")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLocation(`${jsonResponse.region}, ${jsonResponse.country}`);
      });
  }, []);

  const toolArr = [
    {
      name: "Home",
      component: (
        <div className="flex items-center">
          <HomeIcon className="h-7 w-7 cursor-pointer rounded-lg p-[1px] text-lg text-white transition-colors duration-300 hover:bg-slate-100/20" />
          <div className="mx-3 h-5 w-[2px] rounded-full bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: "Audio Player",
      component: (
        <div className="flex items-center">
          <AudioPlayer
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setIsAudioPlayed}
            isAudioMuted={isAudioMuted}
            setIsAudioMuted={setIsAudioMuted}
          />
          <div className="mx-3 h-5 w-[2px] rounded-full bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: "Decoration & Other Tools",
      component: (
        <div className="flex items-center">
          <DecorationAndOthers />
          <div className="mx-3 h-5 w-[2px] rounded-full bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: "Screen Tools",
      component: <ScreenTools />,
    },
  ];

  const onRenderTools = () => {
    return toolArr.map((item) => {
      return <div key={item.name}>{item.component}</div>;
    });
  };

  return (
    <footer className="absolute bottom-0 left-0 right-0 mx-6 mb-5 lg:w-auto">
      <div className="mx-auto w-fit gap-5 rounded-lg border-[0.1px] border-slate-400 bg-black/60 px-8 py-2 text-sm hover:brightness-110 lg:w-full">
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-5">
            <p>{locations}</p>
            <span>{getCurrentTime(datetime)}</span>
            <DayNightToggle
              label=""
              onClick={logState}
              isToggled={isToggled}
              toggle={toggle}
            />
          </div>
          <div className="flex items-center">
            {onRenderTools()}
            <Link href={"/cyber-open"}>
              <Image
                className="ml-5 h-fit w-7"
                width={5000}
                height={5000}
                src="/image.png"
                alt="Scenes"
              />
            </Link>
          </div>
          <UserAndSetting />
        </div>

        <div className="flex items-center justify-center lg:hidden">
          <DecorationAndOthers />
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
