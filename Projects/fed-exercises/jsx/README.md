## Exercise
- [Exercise](jsx.html)

Normally you'll compile all of your code at build-time before you ship your
application to the browser, but because Babel is written in JavaScript we can
actually run it _in_ the browser to compile our code on the fly and that's what
we'll do in this exercise.

So we'll include a script tag for Babel, then we'll update our own script tag to
tell Babel to compile it for us on the fly. When you're done, you should notice
the compiled version of the code appears in the `<head>` of the DOM (which you
can inspect using DevTools).

## Extra Credit

### 1. 💯 interpolate className and children
"Interpolation" is defined as "the insertion of something of a different nature
into something else."

Let's take template literals for example:

```javascript
const greeting = 'Sup'
const subject = 'World'
const message = `${greeting} ${subject}`
```

See if you can figure out how to extract the `className` (`"container"`) and
`children` (`"Hello World"`) to variables and interpolate them in the JSX.

```jsx
const className = 'container'
const children = 'Hello World'
const element = <div className="hmmm">how do I make this work?</div>
```

📜 The react docs for JSX are pretty good:
https://reactjs.org/docs/introducing-jsx.html

Here are a few sections of particular interest for this extra credit:

- https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
- https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx

### 2. 💯 spread props
What if I have an object of props that I want applied to the `div` like this:

```jsx
const children = 'Hello World'
const className = 'container'
const props = {children, className}
const element = <div /> // how do I apply props to this div?
```

If we were doing raw React APIs it would be:

```jsx
const element = React.createElement('div', props)
```

Or, it could be written like this:

```jsx
const element = React.createElement('div', {...props})
```

See if you can figure out how to make that work with JSX.

📜 https://reactjs.org/docs/jsx-in-depth.html#spread-attributes