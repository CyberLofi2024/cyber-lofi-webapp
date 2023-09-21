import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Toggle } from '../toggle/toggle.component';
import { useDate } from '@cyberlofi^_^/hooks/useDate';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/outline';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import DecorationAndOthers from './DecorationAndOthers/DecorationAndOthers';
import ScreenTools from './ScreenTools/ScreenTools';
import UserAndSetting from './UserAndSetting/UserAndSetting';

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
  const [locations, setLocation] = useState('');

  const getCurrentTime = (input: any) => {
    const timeWithoutSeconds = String(input?.time).split(':');
    timeWithoutSeconds.pop();
    return `${timeWithoutSeconds.join(':')} ${input?.time.slice(-2)}`;
  };

  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    fetch('https://ipinfo.io/json?token=aa0dcfa79c8a0c')
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLocation(`${jsonResponse.region}, ${jsonResponse.country}`);
      });
  }, []);

  const toolArr = [
    {
      name: 'Home',
      component: (
        <div className="flex items-center">
          <HomeIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
          <div className="h-5 rounded-full mx-3 w-[2px] bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: 'Audio Player',
      component: (
        <div className="flex items-center">
          <AudioPlayer
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setIsAudioPlayed}
            isAudioMuted={isAudioMuted}
            setIsAudioMuted={setIsAudioMuted}
          />
          <div className="h-5 rounded-full mx-3 w-[2px] bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: 'Decoration & Other Tools',
      component: (
        <div className="flex items-center">
          <DecorationAndOthers />
          <div className="h-5 rounded-full mx-3 w-[2px] bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: 'Screen Tools',
      component: <ScreenTools />,
    },
  ];

  const onRenderTools = () => {
    return toolArr.map((item) => {
      return <div key={item.name}>{item.component}</div>;
    });
  };

  return (
    <footer className="mx-6 mb-5 absolute bottom-0 lg:w-auto left-0 right-0">
      <div className="bg-black/60 w-fit lg:w-full mx-auto px-8 py-2 border-[0.1px] border-slate-400 gap-5 rounded-lg text-sm hover:brightness-110">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p>{locations}</p>
            <span>{getCurrentTime(datetime)}</span>
            <Toggle
              label=""
              onClick={logState}
              isToggled={isToggled}
              toggle={toggle}
            />
          </div>
          <div className="flex items-center">
            {onRenderTools()}
            <Image
              className="h-fit w-7 ml-5"
              width={5000}
              height={5000}
              src="/image.png"
              alt="Scenes"
            />
          </div>
          <UserAndSetting />
        </div>

        <div className="flex lg:hidden items-center justify-center">
          <DecorationAndOthers />
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
