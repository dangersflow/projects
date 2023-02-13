## Introduction 
One of the most unique and useful abilities of JavaScript is its ability to manipulate the DOM (Document Object Model). But what is the DOM, and how do we go about changing it? Let’s jump right in…

## Document Object Model 
The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

```js
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

In the above example, the `<div class="display"></div>` is a “child” of `<div id="container"></div>` and a sibling to `<div class="controls"></div>`. Think of it like a family tree. `<div id="container"></div>` is a parent, with its children on the next level, each on their own “branch”.

## Targeting Nodes with Selectors
When working with the DOM, you use “selectors” to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Let’s start with CSS-style selectors. 

You can use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes.

```js
const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```

## DOM methods
When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above. One of the primary differences is that these nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript. We’ll start with the query selectors - those that help you target nodes.


### Query Selectors
- element.querySelector(selector) returns reference to the first match of selector
- element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors

### Element Creation
- document.createElement(tagName, [options]) creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

```js
const div = document.createElement('div');
```

This function does NOT put your new element into the DOM - it simply creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.

### Append Elements
- parentNode.appendChild(childNode) appends childNode as the last child of parentNode
- parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

### Remove Elements
- parentNode.removeChild(child) removes child from parentNode on the DOM and returns reference to child

### Altering Elements
When you have a reference to an element, you can use that reference to alter the element’s own properties. This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more.

```js
const div = document.createElement('div');                     
// create a new div referenced in the variable 'div'

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules
```

## Adding text content
```js
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div
```



## 💪 Exercises
Head over to [exercise.md](./exercise.md) to work through some exercises!