import React from 'react';
import { Tooltip } from 'react-tooltip';

type Props = {
  title: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

function ThemeMusic({
  title,
  top = '70%',
  left = '20%',
  right,
  bottom,
}: Props) {
  return (
    <div
      style={{
        top,
        left,
        right,
        bottom,
        position: 'absolute',
      }}
    >
      <div className="nan-tooltip relative border-4 h-10 w-10 rounded-full bg-transparent cursor-pointer z-20 hover:border-yellow-200 group">
        <div className="m-1 absolute top-0 left-0 right-0 bottom-0 rounded-full bg-white group-hover:bg-yellow-200 group-hover:flex justify-center items-center hidden"></div>
      </div>
      <Tooltip anchorSelect=".nan-tooltip" place="bottom">
        {title}
      </Tooltip>
    </div>
  );
}

export default ThemeMusic;
