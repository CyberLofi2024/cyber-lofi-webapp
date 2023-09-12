import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType: string,
  callback: any,
  element: any = window,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

/**
 * useEventListener is a custom React hook that allows a component to add an event listener to a specific 
 * DOM element and execute a callback function when the event occurs. 
 * It uses the built-in useEffect hook from the React library.

The hook takes three arguments:

eventType is a string representing the type of event to listen for, such as "click" or "keydown".
callback is a function that represents the action to be taken when the event occurs.
element is an optional DOM element to add the event listener. The default value is window, 
meaning the event listener will be added to the global window object.
It also creates a ref called callbackRef to store the current callback function.
The useEffect hook is used to set up the event listener when the component mounts and to 
remove the event listener when the component unmounts. It also updates the callback ref when the callback function 
changes.

Here is an example of how to use this hook:
import { useState } from "react"
import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
  const [key, setKey] = useState("")
  useEventListener("keydown", e => {
    setKey(e.key)
  })

  return <div>Last Key: {key}</div>
}
This hook can be helpful in situations where you want to handle events such as clicks, 
key presses, or form submissions in a declarative way and keep your component logic 
separate from your event-handling logic.
 * 
 */
