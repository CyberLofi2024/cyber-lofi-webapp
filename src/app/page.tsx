"use client";
import "./globals.scss";
import { AudioDefault } from "@cyberlofi^_^/commons/constants";
import FooterComponent from "@cyberlofi^_^/components/Footer/footer.component";
import HeaderComponent from "@cyberlofi^_^/components/Header/header.component";
import ThemeMusic from "@cyberlofi^_^/components/ThemeMusic/thememusic.component";
import { musicData } from "@cyberlofi^_^/utils/testData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { LoginContext } from "./context/loginContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginComponent from "@cyberlofi^_^/components/Login/login.component";

interface ImMusicData {
  id: number;
  type: string;
  audio: string;
  top: string | null;
  left: string | null;
  right: string | null;
  bottom: string | null;
  play: boolean;
}

export default function Home() {
  const { data: session, status } = useSession();
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const [musicPoints, setMusicPoints] = useState<ImMusicData[]>();

  useEffect(() => {
    // Read the JSON data
    setMusicPoints(musicData);
    if (status !== "loading" && !session) {
      if (setIsOpenLogin) {
        setIsOpenLogin(true);
      }
    }
  }, []);

  const backgroundVideos = [
    {
      id: "day",
      src: "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Outside_Day.mp4",
      audio: "",
    },
    {
      id: "night",
      src: "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/outside_night.mp4",
      audio: "",
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
    <LoginContext.Provider value={{ isOpenLogin, setIsOpenLogin }}>
      <ToastContainer />
      <LoginComponent />
      <div className="relative h-screen" id="container">
        <div className="relative h-screen w-screen overflow-scroll">
          <div className="absolute left-[150%] top-1/2 h-screen min-h-screen w-[177.77778vh] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 md:left-[115%] lg:left-1/2 lg:w-full">
            <video
              hidden={src.id !== "day"}
              src={backgroundVideos[0].src}
              muted
              loop
              autoPlay
              className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
              preload="auto"
            />
            <video
              hidden={src.id !== "night"}
              src={backgroundVideos[1].src}
              muted
              loop
              autoPlay
              className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
              preload="auto"
            />
            <audio
              id="au"
              src={AudioDefault}
              preload="auto"
              // autoPlay
              loop
            ></audio>
            {musicPoints?.map((item) => {
              return (
                <ThemeMusic
                  key={item.id}
                  title={item.type}
                  audio={item.audio}
                  top={item.top ?? "auto"}
                  bottom={item.bottom ?? "auto"}
                  left={item.left ?? "auto"}
                  right={item.right ?? "auto"}
                  isPlaying={item.play}
                />
              );
            })}
          </div>
        </div>

        <HeaderComponent
          isAudioPlayed={isAudioPlayed}
          setIsAudioPlayed={setAudioIsPlayed}
          logState={logState}
          isToggled={isToggled}
          toggle={toggle}
          isAudioMuted={isAudioMuted}
          setIsAudioMuted={setAudioIsMuted}
        />
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
    </LoginContext.Provider>
  );
}
// Home nè
