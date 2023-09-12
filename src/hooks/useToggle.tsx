import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue,
    );
  }

  return [value, toggleValue];
}

/*

useToggle is a custom React hook that allows a component to toggle a value between true and false. 
It uses the useState hook to manage its state. First, the hook accepts a defaultValue argument to 
initialize the value state. Then, it returns an array with two elements: the current value and a 
function called toggleValue that toggles the value between true and false. The function accepts one parameter. 
It sets the value to the parameter If the parameter is boolean. Otherwise, it toggles the current value.

Here is an example of how you can use this hook:
import useToggle from "./useToggle"

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  )
}
*/
