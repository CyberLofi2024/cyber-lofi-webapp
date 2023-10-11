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
      <div className="relative w-fit group flex flex-col justify-center items-center gap-2 p-1">
        <button
          onClick={togglePlayPause}
          className="relative border-4 h-10 w-10 rounded-full bg-transparent cursor-pointer z-20 hover:border-yellow-200 group"
        >
          <div className="m-1 absolute z-20 top-0 left-0 right-0 bottom-0 rounded-full bg-white group-hover:bg-yellow-200 group-hover:flex justify-center items-center hidden"></div>
        </button>

        <div className={`bottom-0 absolute left-0 right-0`}>
          <div className="relative">
            <div className="absolute py-1 left-1/2 -translate-x-1/2 top-0 bg-black/20 rounded-lg w-40 px-3 hidden group-hover:block">
              <p className="text-center">{title}</p>
              <div className={`${isPlaying ? 'opacity-100' : 'h-0'} opacity-0`}>
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
}

export default ThemeMusic;
