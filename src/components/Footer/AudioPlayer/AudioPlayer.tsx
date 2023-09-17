import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function AudioPlayer() {
  const [isPlayed, setIsPlayed] = useState(false);
  const au: any = document.getElementById('au');

  const handlePlayAudio = () => {
    setIsPlayed(!isPlayed);
    isPlayed ? au?.pause() : au?.play();
  };
  const panelArr = [
    {
      name: 'Previous',
      component: (
        <BackwardIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Play',
      component: (
        <button onClick={handlePlayAudio}>
          {isPlayed ? (
            <PauseCircleIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
          ) : (
            <PlayCircleIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
          )}
        </button>
      ),
    },
    {
      name: 'Next',
      component: (
        <ForwardIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Volume',
      component: (
        <SpeakerWaveIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Mute',
      component: (
        <SpeakerXMarkIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
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
