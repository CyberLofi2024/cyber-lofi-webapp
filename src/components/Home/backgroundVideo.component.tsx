import React, { Dispatch, SetStateAction, memo } from "react";

interface Props {
  src: {
    id: string;
    src: string;
    audio: string;
  };
  backgroundVideos: {
    id: string;
    src: string;
    audio: string;
  }[];
  setIsBackgroundPlaying: Dispatch<SetStateAction<boolean>>;
}

const BackgroundVideoComponent = memo(
  ({ src, backgroundVideos, setIsBackgroundPlaying }: Props) => {
    return (
      <>
        <video
          hidden={src.id !== "day"}
          src={backgroundVideos[0].src}
          muted
          loop
          autoPlay
          className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
          preload="none"
          onPlaying={() => {
            setTimeout(() => {
              setIsBackgroundPlaying(true);
            }, 1000);
          }}
        />
        <video
          hidden={src.id !== "night"}
          src={backgroundVideos[1].src}
          muted
          loop
          autoPlay
          className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
          preload="none"
          onPlaying={() => {
            setTimeout(() => {
              setIsBackgroundPlaying(true);
            }, 1000);
          }}
        />
      </>
    );
  }
);

export default BackgroundVideoComponent;
