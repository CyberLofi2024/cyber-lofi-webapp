'use client';
import './globals.scss';
import { useState } from 'react';
import HeaderComponent from '@cyberlofi^_^/components/Header/header.component';
import FooterComponent from '@cyberlofi^_^/components/Footer/footer.component';

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

  return (
    <html lang="en">
      <body>
        <audio
          id="au"
          src="https://lofico.nyc3.cdn.digitaloceanspaces.com/tracks/Twindex%20-%20Down%20The%20Avenue.mp3"
          preload="auto"
          // autoPlay
          loop
        ></audio>

        <video
          hidden={src.id !== 'day'}
          src={
            src.id === 'day' ? backgroundVideos[0].src : backgroundVideos[1].src
          }
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
          <HeaderComponent logState={logState} />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <FooterComponent logState={logState} />
        </div>
      </body>
    </html>
  );
}
