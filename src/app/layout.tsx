'use client';
import { Toggle } from '@cyberlofi^_^/components/toggle/toggle.component';
import './globals.scss';
import { useEffect, useState } from 'react';
import { useDate } from '@cyberlofi^_^/hooks/useDate';

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
  const datetime = useDate();
  const [src, setSrc] = useState(backgroundVideos[0]);
  const [locations, setLocation] = useState('');
  const logState: any = (state: boolean) => {
    const srcVid: any = backgroundVideos.find((f) => f.id !== src.id);
    setSrc(srcVid);
  };

  const playAudio = () => {
    const au: any = document.getElementById('au');
    au.play();
  };

  const getCurrentTime = (input: any) => {
    return input?.time;
  };

  useEffect(() => {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    fetch('https://ipinfo.io/json?token=aa0dcfa79c8a0c')
      .then((response) => response.json())
      .then((jsonResponse) => {
        setLocation(jsonResponse.city + ' ' + jsonResponse.country);
      });
  }, []);

  return (
    <html lang="en">
      <body>
        <audio
          id="au"
          src="https://lofico.nyc3.cdn.digitaloceanspaces.com/tracks/Twindex%20-%20Down%20The%20Avenue.mp3"
          preload="auto"
          autoPlay
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
            <div style={{ margin: 10 }}></div>
            <span>{locations}</span>
            <div style={{ margin: 10 }}></div>
            <span>{getCurrentTime(datetime)}</span>
            <Toggle label="" toggled={true} onClick={logState} />
            <button className="playButton" onClick={playAudio}></button>
            <span>Play music</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
