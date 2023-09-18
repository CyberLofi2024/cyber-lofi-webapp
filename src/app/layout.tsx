'use client';
import './globals.scss';
import { useLayoutEffect, useState } from 'react';
import HeaderComponent from '@cyberlofi^_^/components/Header/header.component';
import FooterComponent from '@cyberlofi^_^/components/Footer/footer.component';
import { Tooltip } from 'react-tooltip';
import { AudioDefault } from '@cyberlofi^_^/commons/constants';

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

  const handleCreateElementByAxises = (
    id: string,
    label: string,
    x: number,
    y: number,
  ) => {
    const e = document.createElement('div');
    const container: any = document.getElementById('main');
    container.appendChild(e);
    e.id = id;
    e.style.width = '30px';
    e.style.height = '30px';
    e.style.borderRadius = '50%';
    e.style.background = 'transparent';
    e.style.border = '3px solid white';
    e.style.position = 'absolute';
    e.style.zIndex = '999999';
    e.style.top = y + '%';
    e.style.left = x + '%';
    e.style.cursor = 'pointer';
    e.style.display = 'flex';
    e.style.justifyContent = 'center';
    e.style.alignItems = 'center';
    e.setAttribute('data-tooltip-id', id + '-tooltip');
    e.setAttribute('data-tooltip-content', label);
    // set child circle element
    const child = document.createElement('div');
    child.id = id + '-child';
    child.style.width = '70%';
    child.style.height = '70%';
    child.style.borderRadius = '50%';
    child.style.margin = 'auto';
    e.appendChild(child);
  };

  const [isAudioPlayed, setAudioIsPlayed] = useState(false);
  useLayoutEffect(() => {
    handleCreateElementByAxises('keyboard', 'Keyboard', 20, 70);
  }, []);

  return (
    <html lang="en">
      <body>
        <Tooltip id="keyboard-tooltip" />
        <audio
          id="au"
          src={AudioDefault}
          preload="auto"
          // autoPlay
          loop
        ></audio>

        <video
          hidden={src.id !== 'day'}
          src={backgroundVideos[0].src}
          muted
          loop
          autoPlay
          className="videoBG"
          preload="auto"
          id="dd"
        />
        <video
          hidden={src.id !== 'night'}
          src={backgroundVideos[1].src}
          muted
          loop
          autoPlay
          className="videoBG"
          preload="auto"
        />
        <div className="appContainer">
          <HeaderComponent
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setAudioIsPlayed}
            logState={logState}
          />
          <main id="main" style={{ flexGrow: 1 }}>
            {children}
          </main>
          <FooterComponent
            isAudioPlayed={isAudioPlayed}
            setIsAudioPlayed={setAudioIsPlayed}
            logState={logState}
          />
        </div>
      </body>
    </html>
  );
}
