'use client';
import './globals.scss';
import { useLayoutEffect, useState } from 'react';
import HeaderComponent from '@cyberlofi^_^/components/Header/header.component';
import FooterComponent from '@cyberlofi^_^/components/Footer/footer.component';
import { Tooltip } from 'react-tooltip';
import { AudioDefault } from '@cyberlofi^_^/commons/constants';
import ThemeMusic from '@cyberlofi^_^/components/ThemeMusic/thememusic.component';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundVideos = [
    {
      id: 'day',
      src: 'https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Outside_Day.mp4',
      audio: '',
    },
    {
      id: 'night',
      src: 'https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/outside_night.mp4',
      audio: '',
    },
  ];
  const [src, setSrc] = useState(backgroundVideos[0]);

  const logState: any = (state: boolean) => {
    const srcVid: any = backgroundVideos.find((f) => f.id !== src.id);
    setSrc(srcVid);
  };

  const [isAudioPlayed, setAudioIsPlayed] = useState(false);
  const [isAudioMuted, setAudioIsMuted] = useState(false);
  const [isToggled, toggle] = useState(true);

  return (
    <html lang="en">
      <body>
        <div className="relative h-screen" id="container">
          <div className="relative w-screen h-screen overflow-scroll">
            <div className="min-h-screen min-w-[100vw] h-screen absolute left-[150%] md:left-[115%] lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77778vh] lg:w-full">
              <video
                hidden={src.id !== 'day'}
                src={backgroundVideos[0].src}
                muted
                loop
                autoPlay
                className="w-full h-full absolute left-0 top-0 md:static lg:object-cover"
                preload="auto"
              />
              <video
                hidden={src.id !== 'night'}
                src={backgroundVideos[1].src}
                muted
                loop
                autoPlay
                className="w-full h-full absolute left-0 top-0 md:static lg:object-cover"
                preload="auto"
              />
              <audio
                id="au"
                src={AudioDefault}
                preload="auto"
                // autoPlay
                loop
              ></audio>
            </div>
          </div>
          <ThemeMusic title="Keyboard" />

          <HeaderComponent
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setAudioIsPlayed}
            logState={logState}
            isToggled={isToggled}
            toggle={toggle}
            isAudioMuted={isAudioMuted}
            setIsAudioMuted={setAudioIsMuted}
          />
          <main id="main" style={{ flexGrow: 1 }}>
            {children}
          </main>
          <FooterComponent
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setAudioIsPlayed}
            logState={logState}
            isToggled={isToggled}
            toggle={toggle}
            isAudioMuted={isAudioMuted}
            setIsAudioMuted={setAudioIsMuted}
          />
        </div>
      </body>
    </html>
  );
}
