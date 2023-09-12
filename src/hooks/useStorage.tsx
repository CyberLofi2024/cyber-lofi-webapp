import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key: string, defaultValue: string) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key: string, defaultValue: string) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(
  key: string,
  defaultValue: string | any,
  storageObject: any,
) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}

/**
 * 
 * useLocalStorage and useSessionStorage is a custom React hook that allows a component to store 
 * a value in the browser's LocalStorage or SessionStorage and keep it in sync with the component's state. 
 * It uses the built-in useState and useEffect hooks from the React library and the useCallback hook.

The useLocalStorage and useSessionStorage functions are similar but use different storage localStorage and 
sessionStorage respectively. They take in two arguments: key and defaultValue. 
key is the key that is used to store the value in the storage object, and defaultValue is the value that will 
be used if the key is not found in the storage object.

Both functions use the storage function, which takes in three arguments: key, defaultValue, 
and storageObject and return an array with three elements:

The current value
A function "setValue" that can be used to update the value in the state and storage.
A function "remove" that can be used to remove the value from the state and storage.
The useEffect hook keeps the value stored in the browser's storage in sync with the component's state.
The useStorage function uses the JSON.stringify() and JSON.parse methods to convert the value to a JSON string 
when storing it in the storage object and back to a JavaScript object when retrieving it from the storage object. 
This allows the hook to work with any data, not just strings.

The useEffect hook runs whenever the key, value, or storageObject changes. 
First, it checks if the value is undefined. In that case, it removes the item from the storage object. 
Otherwise, it stores the value in the storage object.

Here is an example of how to use this hook:
import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
This hook can be helpful in situations where you want to persist data across browser sessions or pages and keep 
the data in sync with the component's state. For example, you can store a user's settings, 
a form's data, or a to-do list. Using the useLocalStorage and useSessionStorage hooks provides
the flexibility of using the browser's local storage or session storage as per the requirement.
 * 
 */
