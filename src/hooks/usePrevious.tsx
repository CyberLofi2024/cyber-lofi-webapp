import { useRef } from "react";

export default function usePrevious(value: any) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}

/**
 * 
 * usePrevious is a custom React hook that allows a component to keep track of the previous value of a variable. 
 * It uses the built-in useRef hook from the React library.

The hook takes in an argument value, which is the current value of the variable. 
Then, it creates two refs, one called currentRef, which holds the present value of the variable, 
and another called previousRef, which has the previous value of the variable.

The hook compares the current value with the previous value. If it's different, 
it updates the previousRef with the current value and the currentRef with the new value. 
Then it returns the previousRef.current.

Here is an example of how to use this hook:
import { useState } from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Kyle")
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  )
}
This hook can be helpful in situations where you need to have access to the previous value of a variable, 
for example, when you want to compare the current value with the value earlier to check 
if it has changed or when you want to track the changes of a variable over time.
 */
