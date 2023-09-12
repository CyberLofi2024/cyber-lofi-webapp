import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback: any, dependencies: any[]) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

// useUpdateEffect is a custom React hook that allows a component
// to run a callback function only when specific dependencies change.
// It uses the React library's built-in useEffect and useRef hooks.

// The hook takes in two arguments:

// callback is the function that should be called when the dependencies change
// dependencies is an array of values that the hook should listen to for changes.
// The hook uses the useRef hook to create a reference firstRenderRef with the initial value as true.
// This reference will be used to track the first render of the component.
// The useEffect hook is used to listen for changes in the dependencies array and call the callback function.
// Inside the useEffect function, it checks whether this is the first render of the component by checking the
// firstRenderRef value. If yes, it sets it to false and returns.
// If not, it means this is an update, so it will call the callback function and return the callback function.

/*

Here is an example of how to use this hook:
import { useState } from "react"
import useUpdateEffect from "./useUpdateEffect"

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => alert(count), [count])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
*/
