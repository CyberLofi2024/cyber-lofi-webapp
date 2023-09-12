import useAsync from "./useAsync";

export default function useScript(url: string) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}

/**
 * useScript is a custom React hook that allows a component to load a JavaScript file from a given URL and 
 * keep track of the loading, error, and value states. In addition, 
 * it uses the custom useAsync hook that allows a component to handle asynchronous operations and keep track 
 * of the loading, error, and value states.

The hook takes in one argument:

URL is the URL of the JavaScript file to be loaded.
The hook creates a callback function that uses the DOM API to create a new script element and sets 
its src to the URL passed in. It also sets the async property to true.
It then returns a new promise that resolves or rejects when the script loads or is in error respectively.

Here is an example of how to use this hook:
import useScript from "./useScript"

export default function ScriptComponent() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  )

  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  return <div>{window.$(window).width()}</div>
}
This hook can be helpful in situations where you want to load external JavaScript libraries dynamically. 
It provides a simple way to manage a component's loading, error, and value states and also allows 
the component to re-load the script when the URL changes.
 * 
 */
