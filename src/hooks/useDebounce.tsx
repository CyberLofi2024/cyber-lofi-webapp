import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(
  callback: any,
  delay: number,
  dependencies: any[],
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

/*
useDebounce is a custom React hook that allows a component to delay the execution of a callback function for a specified amount of time. It uses the built-in useEffect hook from the React library and the useTimeout(2nd custom hook) custom hook.

The hook takes in three arguments:

"callback" is the function that should be debounced.
"delay" is the time in milliseconds that should pass before the callback is invoked.
"dependencies" is an array of values that the hook should listen to for changes and 
re-run the callback if any of the changes.
The hook uses the useTimeout hook to create a timeout that will invoke the callback 
function after the specified delay. The useEffect hook is used to set the timeout on mount and clear it on unmount. 
The first useEffect will call the reset function when any dependencies change, and the second useEffect call 
the clear function when the component unmounts.

Here is an example of how to use this hook:
import { useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
This hook can be helpful in situations where you want to limit the number of times a 
callback function is invoked in a short period. For example, when you have an input field that sends a search 
request to the server on every keystroke, you should wait for a user to stop typing before sending the request 
to avoid unnecessary network traffic and improve the user experience.

*/
