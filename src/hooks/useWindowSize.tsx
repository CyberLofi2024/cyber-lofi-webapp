import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}

/**
 * useWindowSize is a custom React hook that allows a component to keep track of the current size of the 
 * browser window. 
 * It uses the built-in useState hook from the React library and a custom hook called useEventListener 
 * that allows a component to add an event listener to a specific DOM element and execute a callback function 
 * when the event occurs.

The hook creates an object called windowSize that contains the width and height of the browser window 
and sets the initial state using the window.innerWidth and window.innerHeight properties.

It uses the useEventListener hook to add a resize event listener to the window object and updates the 
state with the new width and height of the window when the event occurs.
It returns the windowSize object, which contains the current width and height of the browser window.

Here is an example of how to use this hook:
import useWindowSize from "./useWindowSize"

export default function WindowSizeComponent() {
  const { width, height } = useWindowSize()

  return (
    <div>
      {width} x {height}
    </div>
  )
}
This hook can be helpful in situations where you want to make a responsive design and adapt the layout 
or behavior of a component based on the size of the browser window.
 * 
 */
