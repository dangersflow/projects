
## Exercise
- [Exercise](reactAPIs.html)

Let's convert this to use React! But don't worry, we won't be doing any JSX just
yet... You're going to use raw React APIs here.

In modern applications you'll get React and React DOM files from a "package
registry" like [npm](https://npmjs.com) ([react](https://npm.im/react) and
[react-dom](https://npm.im/react-dom)). But for these first exercises, we'll use
the script files which are available on [unpkg.com](https://unpkg.com) and
regular script tags so you don't have to bother installing them. So in the
exercise you'll be required to add script tags for these files.

Once you include the script tags, you'll have two new global variables to use:
`React` and `ReactDOM`.

Here's a simple example of the API:

```javascript
const elementProps = {id: 'element-id', children: 'Hello world!'}
const elementType = 'h1'
const reactElement = React.createElement(elementType, elementProps)
ReactDOM.render(reactElement, rootElement)
```

Alright! Let's do this!

## Extra Credit

### 1. 💯 nesting elements
See if you can figure out how to write the JavaScript + React code to generate
this DOM output:

```html
<body>
  <div id="root">
    <div class="container">
      <span>Hello</span>
      <span>World</span>
    </div>
  </div>
</body>
```