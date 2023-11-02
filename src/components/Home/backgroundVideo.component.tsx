import React, { memo } from "react";

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
}

const BackgroundVideoComponent = memo(({ src, backgroundVideos }: Props) => {
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
      />
      <video
        hidden={src.id !== "night"}
        src={backgroundVideos[1].src}
        muted
        loop
        autoPlay
        className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
        preload="none"
      />
      ;
    </>
  );
});

export default BackgroundVideoComponent;
