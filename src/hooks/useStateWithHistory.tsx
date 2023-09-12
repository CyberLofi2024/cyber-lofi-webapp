import { useCallback, useRef, useState } from "react";

export default function useStateWithHistory(
  defaultValue: any,
  { capacity = 10 } = {},
) {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v: any) => {
      const resolvedValue = typeof v === "function" ? v(value) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value],
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index: number) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}

/**
 * useStateWithHistory is a custom React hook that allows a component to keep track of the state's history. 
 * It uses the built-in useState, useCallback, and useRef hooks from the React library.

The hook takes in two arguments:

defaultValue is the initial value of the state
capacity is an optional argument that sets the maximum number of states that should be stored in history.
The hook creates two refs, one called historyRef that holds an array of the state's history, 
and another called pointerRef that has the current pointer of the history. 
It also creates three callback functions: set, back, and forward.
The set function is used to set the state, it works similarly to the built-in setState function, 
but it also keeps track of the state's history by adding the new value to the history array and 
updating the pointerRef. The function can take a value or a callback function that receives the current state 
as an argument. The function also ensures that the history array's capacity is not exceeded by removing 
the oldest element.

The back function navigates the previous state in history. 
It decrements the pointerRef and updates the state with the earlier value of the history array.

The forward function navigates the next state in history. 
It increments the pointerRef and updates the state with the next value in the history array.

The go function navigates a specific state in history. 
It sets the pointerRef to the index passed as an argument and updates the state with the value at that index in 
the history array.

The hook returns an array with two elements:

the current state value
an object that contains the history array, the pointer, and the functions set, back, forward, and go.
Here is an example of how to use this hook:
import { useState } from "react"
import useStateWithHistory from "./useStateWithHistory"

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1)
  const [name, setName] = useState("Kyle")

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  )
}
This hook can be helpful in situations where you want to keep track of the state's history, 
for example, when you want 
to implement undo or redo functionality or to allow the user to navigate through the history of changes.
 * 
 * 
 * 
 */
