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
      {/* <video
        hidden={src.id !== "day"}
        src={backgroundVideos[0].src}
        muted
        loop
        autoPlay
        className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
        preload="none"
      /> */}
      <iframe
        hidden={src.id !== "day"}
        width="560"
        height="315"
        src={backgroundVideos[0].src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
      ></iframe>
      {/* <video
        hidden={src.id !== "night"}
        src={backgroundVideos[1].src}
        muted
        loop
        autoPlay
        className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
        preload="none"
      /> */}
      <iframe
        hidden={src.id !== "night"}
        width="560"
        height="315"
        src={backgroundVideos[1].src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="absolute left-0 top-0 h-full w-full md:static lg:object-cover"
      ></iframe>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20"></div>
    </>
  );
});

export default BackgroundVideoComponent;
