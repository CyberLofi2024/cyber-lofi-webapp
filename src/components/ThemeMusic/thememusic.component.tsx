import React, { useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import AudioOnObject from './AudioOnObject';

type Props = {
  title: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

function ThemeMusic({
  title,
  top = '70%',
  left = '20%',
  right,
  bottom,
}: Props) {
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
      <div className="group flex flex-col justify-center items-center gap-2">
        <button
          onClick={togglePlayPause}
          className="nan-tooltip relative border-4 h-10 w-10 rounded-full bg-transparent cursor-pointer z-20 hover:border-yellow-200 group"
        >
          <div className="m-1 absolute top-0 left-0 right-0 bottom-0 rounded-full bg-white group-hover:bg-yellow-200 group-hover:flex justify-center items-center hidden"></div>
        </button>

        <div
          className={`${
            isPlaying ? 'group-hover:opacity-100' : ''
          } bg-black/20 rounded-lg w-40 px-3 py-1 opacity-0`}
        >
          <p>{title}</p>
          <AudioOnObject play={isPlaying} audioRef={audioRef} />
        </div>
      </div>
    </div>
  );
}

export default ThemeMusic;
