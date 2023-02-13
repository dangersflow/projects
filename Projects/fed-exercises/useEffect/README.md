In this exercise, we're going to enhance our `<Greeting />` component to get its
initial state value from localStorage (if available) and keep localStorage
updated as the `name` is updated.

## Extra Credit 💯

### 1. effect dependencies

The callback we're passing to `React.useEffect` is called after every render
of our component (including re-renders). This is exactly what we want because we
want to make sure that the `name` is saved into localStorage whenever it
changes, but there are various reasons a component can be re-rendered (for
example, when a parent component in the application tree gets re-rendered).

Really, we only want localStorage to get updated when the `name` state
actually changes. It doesn't need to re-run any other time. Luckily for us,
`React.useEffect` allows you to pass a second argument called the "dependency
array" which signals to React that your effect callback function should be
called when (and only when) those dependencies change. So we can use this to
avoid doing unnecessary work.

Add a dependencies array for `React.useEffect` to avoid the callback being
called too frequently.

### 3. 💯 custom hook

The best part of hooks is that if you find a bit of logic inside your component
function that you think would be useful elsewhere, you can put that in another
function and call it from the components that need it (just like regular
JavaScript). These functions you create are called "custom hooks".

Create a custom hook called `useLocalStorage` for reusability of all this
logic.


## 💪 Exercises
Head over to [exercise.md](./exercise.js) to work through a exercise!