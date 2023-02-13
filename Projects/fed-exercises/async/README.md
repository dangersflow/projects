## 💪 Exercise

Write your JavaScript code inside of `async.html`.

1. Create a promise that resolves after 5 seconds. When this promise resolves, log your name to the console.

> In order to accomplish this, you'll want to use the [`setTimeout` function](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout). Note that this function accepts a function as an argument and will invoke that function after a specified time.

2. Create a promise that reject after 5 seconds. When this promise resolves, log a failure message to the screen.

3. Create two promises -- One that resolves after 2 seconds and one that resolves after 5. When both promises have resolved, log your initials to the console.

4. Using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) make a request to `https://jsonplaceholder.typicode.com/posts`. Log the response to the console.

5. Make a request to `https://jsonplaceholder.typicode.com/posts/1` and `https://jsonplaceholder.typicode.com/posts/2`. Log the response of whichever one comes back first.

6. Make a request to `https://brokenurl.com`. Log the error to the console ('TypeError: Failed to fetch').