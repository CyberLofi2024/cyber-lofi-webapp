import { useState } from "react";

export default function useArray(defaultValue: any[]) {
  const [array, setArray] = useState(defaultValue);

  function push(element: any) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: any) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: any) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}

/*
useArray is a custom React hook that allows a component to manage an array state. 
It uses the built-in useState hook from the React library. The hook takes in an argument, defaultValue, 
which is used to initialize the array state. The hook returns an object with several properties:

array is the current array state
set is a function that allows you to set the array state to a new value
push is a function that will enable you to add an element to the end of the array
filter is a function that allows you to filter the array by passing a callback function
update is a function that will enable you to update an element at a specific index of the array
remove is a function that will allow you to remove an element to a particular index of the array
clear is a function that will enable you to clear the array.
All the functions that change the array state use the setArray function. Still, they do it in a way 
that preserves the immutability of the state by creating a new array, adding or removing the elements, 
and then passing it to the setArray function.

Here is an example of how to use this hook:
import useArray from "./useArray"

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
This hook can be helpful in situations where you want to manage an array of data in the state of a component and 
perform everyday array operations such as adding, 
removing, updating, and filtering elements.
*/
