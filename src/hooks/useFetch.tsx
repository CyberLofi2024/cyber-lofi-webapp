import useAsync from "./useAsync";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(url: string, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}

/**
 * useFetch is a custom React hook that allows a component to handle fetching data from a URL and keep track of 
 * the loading, error, and value states. It uses the built-in fetch API and custom hook useAsync that allows a 
 * component to handle asynchronous operations and keep track of the loading, error, and value states.

The hook takes in three arguments:

URL is the URL of the endpoint to fetch data from
options is an object that contains options such as headers, method, and body for the fetch request.
dependencies is an array of dependencies the hook should listen for changes. The callback function 
will be executed when any of the dependencies change.
The hook creates a callback function that uses the fetch API to request the given URL with the options 
passed in and the default options.
It then checks if the response is ok. If yes, it returns the response in json format. If not, it returns 
the JSON response and rejects it.

Here is an example of how to use this hook:
import { useState } from "react"
import useFetch from "./useFetch"

export default function FetchComponent() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
This hook can be helpful in situations where you want to handle fetching data from an API. 
It provides a simple way to manage the loading, error, 
and value states in a component and also allows the component.
 * 
 */
