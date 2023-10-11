import React, { useRef, useState } from 'react';
import AudioOnObject from './AudioOnObject';

type Props = {
  title: string;
  audio: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  isPlaying: boolean;
};

function ThemeMusic({ title, audio, top, left, right, bottom }: Props) {
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
        position: 'absolute',
      }}
    >
      <div className="relative group flex flex-col justify-center items-center gap-2">
        <button
          onClick={togglePlayPause}
          className="relative border-4 h-10 w-10 rounded-full bg-transparent cursor-pointer z-20 hover:border-yellow-200 group"
        >
          <div className="m-1 absolute z-20 top-0 left-0 right-0 bottom-0 rounded-full bg-white group-hover:bg-yellow-200 group-hover:flex justify-center items-center hidden"></div>
        </button>

        <div
          className={`${
            isPlaying ? '-bottom-16' : '-bottom-10'
          } absolute bg-black/20 rounded-lg w-40 px-3`}
        >
          <div className="group-hover:block hidden pt-1">
            <p className="text-center">{title}</p>
          </div>
          <div
            className={`${
              isPlaying ? 'group-focus-within:opacity-100' : 'hidden'
            } opacity-0 pb-1`}
          >
            <AudioOnObject
              play={isPlaying}
              audioRef={audioRef}
              audioURL={audio}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeMusic;
