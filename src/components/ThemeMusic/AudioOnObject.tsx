import React, { useState, ChangeEvent, MutableRefObject } from 'react';

interface Props {
  play: boolean;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  audioURL: string;
}

function AudioOnObject({ play, audioRef, audioURL }: Props) {
  const [volume, setVolume] = useState<number>(1); // Initial volume at maximum (1 or 100%)

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="group">
      <audio ref={audioRef} controls className="hidden" autoPlay={play} loop>
        <source src={audioURL} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-2 appearance-none rounded-full thumb:bg-white thumb:w-8 thumb:h-8 caret-yellow-200"
      />
    </div>
  );
}

export default AudioOnObject;
