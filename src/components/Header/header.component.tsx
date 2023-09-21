import React, { Dispatch, SetStateAction } from 'react';
import { Toggle } from '../toggle/toggle.component';
import { useDate } from '@cyberlofi^_^/hooks/useDate';
import AudioPlayer from '../Footer/AudioPlayer/AudioPlayer';
import HeaderSetting from './HeaderSetting/HeaderSetting';

interface Props {
  logState: (state: boolean) => void;
  isAudioPlayed: boolean;
  setIsAudioPlayed: Dispatch<SetStateAction<boolean>>;
}

function HeaderComponent({ logState, isAudioPlayed, setIsAudioPlayed }: Props) {
  const datetime = useDate();

  const getCurrentTime = (input: any) => {
    const timeWithoutSeconds = String(input?.time).split(':');
    timeWithoutSeconds.pop();
    return `${timeWithoutSeconds.join(':')} ${input?.time.slice(-2)}`;
  };

  return (
    <header className="absolute top-0 left-0 flex justify-center right-0 lg:hidden md:mx-5 mx-2 mt-5">
      <div className="bg-black/60 w-fit flex items-center justify-between py-2 px-3 md:px-3 border-[0.1px] border-slate-400 gap-5 rounded-lg text-sm hover:brightness-110">
        <div className="flex items-center gap-5">
          <span>{getCurrentTime(datetime)}</span>
          <Toggle label="" toggled={true} onClick={logState} />
        </div>
        <div className="flex items-center">
          <AudioPlayer
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setIsAudioPlayed}
          />
        </div>
        <HeaderSetting />
      </div>
    </header>
  );
}

export default HeaderComponent;
