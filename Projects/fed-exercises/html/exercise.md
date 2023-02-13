## Header and Nav
---
Let’s take a look at some semantic elements that assist in the structure of a web page. A `<header>` is a container usually for either navigational links or introductory content containing `<h1>` to `<h6>` headings.

The example below shows `<header>` in action:

```html
<header>
  <h1>
     Everything you need to know about pizza!
  </h1>
</header>
```

This can be compared to the code below which uses a `<div>` tag instead of a `<header>` tag:

```html
<div id="header">
  <h1>
    Everything you need to know about pizza!
  </h1>
</div>
```

By using a `<header>` tag, our code becomes easier to read. It is much easier to identify what is inside of the `<h1>`‘s parent tags, as opposed to a `<div>` tag which would provide no details as to what was inside of the tag.

A `<nav>` is used to define a block of navigation links such as menus and tables of contents. It is important to note that `<nav>` can be used inside of the `<header>` element but can also be used on its own.

Let’s take a look at the example below:

```html
<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>      
    </ul>
  </nav>
</header>
```

By using `<nav>` as a way to label our navigation links, it will be easier for not only us, but also for web browsers and screen readers to read the code.

Now that we’ve learned about the `<header>` and `<nav>` elements let’s add them into our code!

---

### Exercise 1 💪
In `exercise.html`, find the `<div id="header">` tag and change it to `<header>`.

> Note: When changing an opening tag, you must find the corresponding closing tag and change that as well. If you don’t, you’ll see some red in your code to indicate the error.

Now, find the `<div id="nav">` tag and change it to `<nav>`.

---

## Main and Footer
Two more structural elements are `<main>` and `<footer>`. These elements along with `<nav>` and `<header>` help describe where an element is located based on conventional web development standards.

The element `<main>` is used to encapsulate the dominant content within a webpage. This tag is separate from the `<footer>` and the `<nav>` of a web page since these elements don’t contain the principal content. By using `<main>` as opposed to a `<div>` element, screen readers and web browsers are better able to identify that whatever is inside of the tag is the bulk of the content.

So how does `<main> `look when incorporated into our code? That’s a great question.

```html
<main>
  <header>
    <h1>Types of Sports</h1>
  </header>
  <article>
    <h3>Baseball</h3>
    <p>
      The first game of baseball was played in Cooperstown, New York in the summer of 1839.
    </p>
  </article>
</main>
```
As we see above, `<main>` contains an `<article>` and `<header>` tag with child elements that hold the most important information related to the page.

The content at the bottom of the subject information is known as the footer, indicated by the `<footer>` element. The footer contains information such as:

* Contact information
* Copyright information
* Terms of use
* Site Map
* Reference to top of page links

For example:

```html
<footer>
  <p>Email me at Codey@Codecademy.com</p>
</footer>
```

In the example above, the footer is used to contain contact information. The `<footer>` tag is separate from the `<main>` element and typically located at the bottom of the content.

---

## Exercise 2 💪
1. In the code editor, find the `<div id="main">` tag and change it to `<main>`.
2. Now, find the `<div id="footer">` tag and change it to `<footer>`.

### Article and Section
Now that we covered the body of Semantic HTML, let’s focus on what can go in the body. The two elements we’re going to focus on now are `<section>` and `<article>`.

`<section>` defines elements in a document, such as chapters, headings, or any other area of the document with the same theme. For example, content with the same theme such as articles about cricket can go under a single `<section>`. A website’s home page could be split into sections for the introduction, news items, and contact information.

Here is an example of how to use `<section>`:

```html
<section>
  <h2>Fun Facts About Cricket</h2> 
</section>
```

In the code above we created a `<section>` element to encapsulate the code. In `<section>` we added a `<h2>` element as a heading.

The `<article>` element holds content that makes sense on its own. `<article>` can hold content such as articles, blogs, comments, magazines, etc. An `<article>` tag would help someone using a screen reader understand where the article content (that might contain a combination of text, images, audio, etc.) begins and ends.

Here is an example of how to use `<article>`:

```html
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```

In the code above, the `<article>` element containing a fact about cricket was placed inside of the `<section>` element. It is important to note that a `<section>` element could also be placed in an `<article>` element depending on the context.

---

### Exercise 3 💪
1. In the code find and replace `<div id="section">` with `<section>` and replace the corresponding closing `</div>` with a closing `</section>`.

Note: When removing the `<div>` tag, make sure you remove the id attached to it!
2. Now encapsulate the `<h2>` and `<p>` tag with `<article>`.

---

## The Aside Element
The `<aside>` element is used to mark additional information that can enhance another element but isn’t required in order to understand the main content. This element can be used alongside other elements such as `<article>` or `<section>`. Some common uses of the `<aside>` element are for:

* Bibliographies
* Endnotes
* Comments
* Pull quotes
* Editorial sidebars
* Additional information

Here’s an example of `<aside>` being used alongside `<article>`:

```html
<article>
  <p>The first World Series was played between Pittsburgh and Boston in 1903 and was a nine-game series.</p>
</article>
<aside>
  <p>
   Babe Ruth once stated, “Heroes get remembered, but legends never die.” 
  </p>
</aside>
```

As shown above, the information within the `<article>` is the important content. Meanwhile the information within the `<aside>` enhances the information in `<article>` but is not required in order to understand it.

---

### Exercise 4 💪
Remove the `<div id="aside">` tag and replace it with <aside> tag. Don’t forget about the closing tag!

---

## Figure and Figcaption
With `<aside>`, we learned that we can put additional information next to a main piece of content, but what if we wanted to add an image or illustration? That is where `<figure>` and `<figcaption>` come in.

`<figure>` is an element used to encapsulate media such as an image, illustration, diagram, code snippet, etc, which is referenced in the main flow of the document.

```html
<figure>
  <img src="overwatch.jpg"/>
</figure>
```

In this code, we created a `<figure>` element so that we can encapsulate our `<img>` tag. In `<figure>` we used the `<img>` tag to insert an image onto the webpage. We used the src attribute within the `<img>` tag so that we can link the source of the image.

It’s possible to add a caption to the image by using `<figcaption>`.

`<figcaption>` is an element used to describe the media in the `<figure>` tag. Usually, `<figcaption>` will go inside `<figure>`. This is different than using a `<p>` element to describe the content; if we decide to change the location of `<figure>`, the paragraph tag may get displaced from the figure while a `<figcaption>` will move with the figure. This is useful for grouping an image with a caption.

```html
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```

In the example above, we added a `<figcaption>` into the `<figure>` element to describe the image from the previous example. This helps group the `<figure>` content with the `<figcaption>` content.

While the content in `<figure>` is related to the main flow of the document, its position is independent. This means that you can remove it or move it somewhere else without affecting the flow of the document.

---

### Exercise 5 💪
1. Create an opening and closing `<figure>` tag under the closing `</section>` tag.
2. Add an image by using the `<img>` tag within `<figure>`. 
3. Create a `<figcaption>` under `<img>` and describe the image.

