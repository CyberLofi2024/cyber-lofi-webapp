'use client';
import { Toggle } from '@cyberlofi^_^/components/toggle/toggle.component';
import './globals.scss';
import { useState } from 'react';

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
  const logState = (state: boolean) => {
    console.log('Toggled:', state);
    const srcVid: any = backgroundVideos.find((f) => f.id !== src.id);
    setSrc(srcVid);
  };
  return (
    <html lang="en">
      <body>
        <audio
          preload="auto"
          src="https://lofico.nyc3.cdn.digitaloceanspaces.com/tracks/Twindex%20-%20Down%20The%20Avenue.mp3"
          autoPlay
          loop
        />
        <video
          hidden={src.id !== 'day'}
          src={backgroundVideos[0].src}
          muted
          loop
          autoPlay
          className="videoBG"
          preload="auto"
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
          <header>Header</header>
          <main style={{ flexGrow: 1 }}>{children}</main>
          <footer>
            <Toggle label="" toggled={true} onClick={logState} />
          </footer>
        </div>
      </body>
    </html>
  );
}
