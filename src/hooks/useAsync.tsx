import { useCallback, useEffect, useState } from "react";

export default function useAsync(callback: any, dependencies: any[] = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}

/**
 * useAsync is a custom React hook that allows a component to handle asynchronous operations and keep track of 
 * the loading, error, and value states. It uses the built-in useState and useEffect hooks from the React library 
 * and the useCallback hook.

The hook takes in two arguments:

callback is a function that returns a promise. This function is responsible for performing the async operation.
dependencies is an array of dependencies the hook should listen for changes. The callback function will 
be executed when any of the dependencies change.
The hook creates three state variables: loading, error, and value. The loading state is used to 
indicate whether the async operation is currently in progress, the error state is used to store the error object in 
case the promise is rejected, and the value state is used to store the resolved value in case the promise is fulfilled.

The hook also creates a callback function called callbackMemoized using useCallback. 
This function sets the loading, error, and value states to their initial values and then calls the callback function 
passed in.
The useEffect hook calls the callbackMemoized function when the dependencies change.

Here is an example of how to use this hook:
import useAsync from "./useAsync"

export default function AsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}
This hook can be useful in situations where you want to handle async operations such as fetching data from an API,
 uploading a file, or saving data to a database. It provides a simple way to manage the loading, error, 
 and value states in a component and also 
allows the component to re-run the async operation when certain values change.
 * 
 */
