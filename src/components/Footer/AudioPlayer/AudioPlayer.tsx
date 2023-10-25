import {
  BackwardIcon,
  ForwardIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  isAudioPlayed: boolean;
  setIsAudioPlayed: Dispatch<SetStateAction<boolean>>;
  isAudioMuted: boolean;
  setIsAudioMuted: Dispatch<SetStateAction<boolean>>;
}

function AudioPlayer({
  isAudioPlayed,
  setIsAudioPlayed,
  isAudioMuted,
  setIsAudioMuted,
}: Props) {
  const handlePlayAudio = () => {
    const au: any = document.getElementById('au');
    setIsAudioPlayed(!isAudioPlayed);
    isAudioPlayed ? au?.pause() : au?.play();
    setIsAudioMuted(false);
  };

  const handleMuteAudio = () => {
    const au = document.getElementById('au') as HTMLAudioElement;
    setIsAudioMuted(true);
    au.muted = true;
  };

  const handleUnmutedAudio = () => {
    const au = document.getElementById('au') as HTMLAudioElement;
    setIsAudioMuted(false);
    au.muted = false;
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
      name: isAudioMuted ? 'Muted' : 'Volumn',
      component: (
        <div>
          {isAudioMuted ? (
            <SpeakerXMarkIcon
              onClick={handleUnmutedAudio}
              className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg"
            />
          ) : (
            <SpeakerWaveIcon
              onClick={handleMuteAudio}
              className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg"
            />
          )}
        </div>
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
