import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

export default function useDeepCompareEffect(
  callback: any,
  dependencies: any[],
) {
  const currentDependenciesRef: any = useRef();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
}

/**
 * useDeepCompareEffect is a custom React hook that allows a component to run an effect only when 
 * the dependencies have changed using a deep comparison instead of a shallow comparison. 
 * It uses the built-in useEffect hook from the React library and lodash isEqual function for deep comparison.

The hook takes two arguments:

callback is a function that represents the effect of being executed.
dependencies is an array of values that the effect depends on.
It also creates a ref called currentDependenciesRef to store the current dependencies.
It then compares the current dependencies with the new dependencies using the isEqual function. 
If they are not equal, it updates the current dependencies ref with the new dependencies.
Then it calls useEffect with the callback function and the currentDependenciesRef.current as the dependencies.

Here is an example of how to use this hook:
import { useEffect, useState, useRef } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

export default function DeepCompareEffectComponent() {
  const [age, setAge] = useState(0)
  const [otherCount, setOtherCount] = useState(0)
  const useEffectCountRef = useRef()
  const useDeepCompareEffectCountRef = useRef()

  const person = { age: age, name: "Kyle" }

  useEffect(() => {
    useEffectCountRef.current.textContent =
      parseInt(useEffectCountRef.current.textContent) + 1
  }, [person])

  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent =
      parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
  }, [person])

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={() => setAge(currentAge => currentAge + 1)}>
        Increment Age
      </button>
      <button onClick={() => setOtherCount(count => count + 1)}>
        Increment Other Count
      </button>
    </div>
  )
}
This hook can be helpful in situations where the dependencies are complex objects or arrays, 
and you want to ensure that the effect only runs when the specific values inside the dependencies have changed. 
It can help prevent unnecessary re-renders and improve performance.
 * 
 */
