import React, { ReactNode, useEffect, useState } from 'react';
import { Toggle } from '../toggle/toggle.component';
import { useDate } from '@cyberlofi^_^/hooks/useDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/24/outline';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import DecorationAndOthers from './DecorationAndOthers/DecorationAndOthers';
import ScreenTools from './ScreenTools/ScreenTools';
import UserAndSetting from './UserAndSetting/UserAndSetting';

interface Props {
  logState: (state: boolean) => void;
}

function FooterComponent({ logState }: Props) {
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
          <HomeIcon className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
          <div className="h-5 rounded-full mx-3 w-[2px] bg-slate-300 opacity-50"></div>
        </div>
      ),
    },
    {
      name: 'Audio Player',
      component: (
        <div className="flex items-center">
          <AudioPlayer />
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
    <footer className="mx-6 mb-5">
      <div className="bg-black/60 w-4/5 mx-auto md:w-full px-4 py-2 border-[0.1px] border-slate-400 gap-5 rounded-lg text-sm hover:brightness-110">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p>{locations}</p>
            <span>{getCurrentTime(datetime)}</span>
            <Toggle label="" toggled={true} onClick={logState} />
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