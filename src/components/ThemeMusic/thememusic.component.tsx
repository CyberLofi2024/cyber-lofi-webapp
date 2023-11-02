import React, { memo, useRef, useState } from "react";
import AudioOnObject from "./AudioOnObject";

type Props = {
  title: string;
  audio: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  isPlaying: boolean;
};

const ThemeMusic = memo(({ title, audio, top, left, right, bottom }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div
      style={{
        top,
        left,
        right,
        bottom,
        position: "absolute",
      }}
    >
      <div className="group relative flex w-fit flex-col items-center justify-center gap-2 p-1">
        <button
          onClick={togglePlayPause}
          className="group relative z-20 h-10 w-10 cursor-pointer rounded-full border-4 bg-transparent hover:border-yellow-200"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 z-20 m-1 hidden items-center justify-center rounded-full bg-white group-hover:flex group-hover:bg-yellow-200"></div>
        </button>

        <div className={`absolute bottom-0 left-0 right-0`}>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden w-40 -translate-x-1/2 rounded-lg bg-black/20 px-3 py-1 group-hover:block">
              <p className="text-center">{title}</p>
              <div className={`${isPlaying ? "opacity-100" : "h-0"} opacity-0`}>
                <AudioOnObject
                  play={isPlaying}
                  audioRef={audioRef}
                  audioURL={audio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ThemeMusic;
