import { MutableRefObject, useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback: any, delay: number) {
  const callbackRef = useRef(callback);
  const timeoutRef: any = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

/*
useTimeout is a custom React hook that allows a component to set and clear a timeout. 
It uses the useCallback, useEffect, and useRef hooks from the React library. 
The hook takes in two arguments: a callback that will be called after the specified delay, 
and a delay is the time in milliseconds that should pass before the callback is invoked.

The hook returns an object with two properties: reset and clear, functions that can be used to 
reset or clear the timeout.

The hook uses the useRef hook to create two references: callbackRef and timeoutRef. 
The callbackRef holds the callback function as a mutable value, and timeoutRef contains the timeout id 
returned by setTimeout() function.

The useEffect hook is used to ensure that the callbackRef.current always has the latest callback passed.
The set function creates a new timeout using setTimeout, invoking the callback function after the specified delay. 
The clear function clears the timeout using clearTimeout. Then there is an another useEffect hook is used to set 
the timeout on mount and remove it on unmount. The reset function is a combination of clear and set functions. 
Finally, the useCallback hook ensures that the functions are only recreated when their dependencies change.

Here is an example of how you can use this hook:
import { useState } from "react"
import useTimeout from "./useTimeout"

export default function TimeoutComponent() {
  const [count, setCount] = useState(10)
  const { clear, reset } = useTimeout(() => setCount(0), 1000)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  )
}
This custom useTimeout hook can be helpful in various situations where a component needs to act as 
an unavoidable delay. For example:

A notification message that disappears after a certain amount of time
A form submission that shows a loading spinner for a certain amount of time before redirecting
A slideshow that automatically advances to the next slide after a certain amount of time
A countdown timer that displays the remaining time and triggers an action when it reaches zero
An auto-save feature that saves the form data after a certain amount of time
A session timeout that logs the user out after a certain amount of inactivity
A debounce function that delays the callback execution for a certain amount of time.
It can be used in any situation where you need to wait for a certain amount of time before acting or to repeat an action multiple 
times with a delay between them.
*/
