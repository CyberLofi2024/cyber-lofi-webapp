import React from 'react';
import { Toggle } from '../toggle/toggle.component';
import { useDate } from '@cyberlofi^_^/hooks/useDate';
import AudioPlayer from '../Footer/AudioPlayer/AudioPlayer';
import UserAndSetting from '../Footer/UserAndSetting/UserAndSetting';
import HeaderSetting from './HeaderSetting/HeaderSetting';

interface Props {
  logState: (state: boolean) => void;
}

function HeaderComponent({ logState }: Props) {
  const datetime = useDate();

  const getCurrentTime = (input: any) => {
    const timeWithoutSeconds = String(input?.time).split(':');
    timeWithoutSeconds.pop();
    return `${timeWithoutSeconds.join(':')} ${input?.time.slice(-2)}`;
  };

  return (
    <header className="lg:hidden md:mx-5 mx-2 mt-5">
      <div className="bg-black/60 w-full flex items-center justify-between p-2 border-[0.1px] border-slate-400 gap-5 rounded-lg text-sm hover:brightness-110">
        <div className="flex items-center gap-5">
          <span>{getCurrentTime(datetime)}</span>
          <Toggle label="" toggled={true} onClick={logState} />
        </div>
        <div className="flex items-center">
          <AudioPlayer />
        </div>
        <HeaderSetting />
      </div>
    </header>
  );
}

export default HeaderComponent;
