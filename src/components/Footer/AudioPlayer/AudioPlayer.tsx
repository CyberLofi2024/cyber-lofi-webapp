import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  isAudioPlayed: boolean;
  setIsAudioPlayed: Dispatch<SetStateAction<boolean>>;
}

function AudioPlayer({ isAudioPlayed, setIsAudioPlayed }: Props) {
  const au: any = document.getElementById('au');

  const handlePlayAudio = () => {
    setIsAudioPlayed(!isAudioPlayed);
    isAudioPlayed ? au?.pause() : au?.play();
  };
  const panelArr = [
    {
      name: 'Previous',
      component: (
        <BackwardIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Play',
      component: (
        <button onClick={handlePlayAudio}>
          {isAudioPlayed ? (
            <PauseCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
          ) : (
            <PlayCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
          )}
        </button>
      ),
    },
    {
      name: 'Next',
      component: (
        <ForwardIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Volume',
      component: (
        <SpeakerWaveIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Mute',
      component: (
        <SpeakerXMarkIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
  ];

  const onRenderAudioPanel = () => {
    return panelArr.map((item) => {
      return (
        <div title={item.name} key={item.name}>
          {item.component}
        </div>
      );
    });
  };

  return <div className="flex gap-1 md:gap-3">{onRenderAudioPanel()}</div>;
}

export default AudioPlayer;
