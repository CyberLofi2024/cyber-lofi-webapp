import React, { Dispatch, SetStateAction } from "react";
import { DayNightToggle } from "../toggles/DayNightToggle";
import { useDate } from "@cyberlofi^_^/hooks/useDate";
import AudioPlayer from "../Footer/AudioPlayer/AudioPlayer";
import HeaderSetting from "./HeaderSetting/HeaderSetting";

interface Props {
  logState: (state: boolean) => void;
  isAudioPlayed: boolean;
  setIsAudioPlayed: Dispatch<SetStateAction<boolean>>;
  isToggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  isAudioMuted: boolean;
  setIsAudioMuted: Dispatch<SetStateAction<boolean>>;
}

function HeaderComponent({
  logState,
  isAudioPlayed,
  setIsAudioPlayed,
  isToggled,
  toggle,
  isAudioMuted,
  setIsAudioMuted,
}: Props) {
  const datetime = useDate();

  const getCurrentTime = (input: any) => {
    const timeWithoutSeconds = String(input?.time).split(":");
    timeWithoutSeconds.pop();
    return `${timeWithoutSeconds.join(":")} ${input?.time.slice(-2)}`;
  };

  return (
    <header className="absolute left-0 right-0 top-0 mx-2 mt-5 flex justify-center md:mx-5 lg:hidden">
      <div className="flex w-fit items-center justify-between gap-5 rounded-lg border-[0.1px] border-slate-400 bg-black/60 px-3 py-2 text-sm hover:brightness-110 md:px-3">
        <div className="flex items-center gap-5">
          <span>{getCurrentTime(datetime)}</span>
          <DayNightToggle
            label=""
            onClick={logState}
            isToggled={isToggled}
            toggle={toggle}
          />
        </div>
        <div className="flex items-center">
          <AudioPlayer
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setIsAudioPlayed}
            isAudioMuted={isAudioMuted}
            setIsAudioMuted={setIsAudioMuted}
          />
        </div>
        <HeaderSetting />
      </div>
    </header>
  );
}

export default HeaderComponent;
