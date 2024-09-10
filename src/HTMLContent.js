import React from 'react';
import './HTMLContent.css';
const HTMLContent = () => {
  return (
    <div className="content">
      <div className="topic">
        <h2>Introduction to HTML</h2>
        <p>HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It consists of elements that define the structure and semantics of a web page's content.</p>
        <h2>What is HTML?</h2>
        <p>HTML, or Hypertext Markup Language, is the standard markup language used to structure and define the content of web pages. It's a basic scripting language that web browsers use to render pages on the World Wide Web. HTML elements tell the browser how to display content, such as headings, paragraphs, links, images, and data tables.</p>
      </div>

      <div className="topic">
        <h2>Basic Structure of an HTML Document</h2>
        <p>The basic structure of an HTML document provides the foundation for all web pages. It includes essential elements that define the document type, metadata, and the content of the page. Below is a detailed explanation of each part of the basic structure, along with a simple code example.</p>
        <pre><code className="html">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`}
        </code></pre>
        <p><code>&lt;!DOCTYPE html&gt;</code>: Declares the HTML version.</p>
        <p><code>&lt;html lang="en"&gt;</code>: Defines the root element of the document with the language attribute.</p>
        <p><code>&lt;head&gt;</code>: Contains metadata like character set, viewport settings, and page title.</p>
        <p><code>&lt;body&gt;</code>: Contains the visible content of the document.</p>
      </div>
      <div className="topic">
        <h2>DOCTYPE Declaration</h2>
        <p>Specifies the HTML version to ensure proper rendering by web browsers.</p>
        <pre><code className="html">
{`<!DOCTYPE html>`}
        </code></pre>
      </div>

      <div className="topic">
        <h2>HTML Elements and Tags</h2>
        <p>HTML elements are the building blocks of HTML documents. An element generally consists of a start tag, content, and an end tag. Some elements, known as self-closing or void elements, do not have an end tag.</p>

        <h3>Headings</h3>
        <pre><code className="html">
{`<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<!-- ... -->
<h6>This is a Heading 6</h6>`}
        </code></pre>
    <p>Headings in HTML are used to create titles and subtitles, helping to structure the content of a web page. There are six levels of headings, from {`<h1>`} to {`<h6>`}, with {`<h1>`} being the most important and {`<h6>`} the least.</p>
        <h3>Paragraphs</h3>
        <p>Paragraphs {`<p>`} in HTML are used to structure blocks of text into separate paragraphs. They are commonly used to present textual content on a web page in a clear and organized manner. Paragraphs are block-level elements and typically appear as separate blocks of text with some space above and below them.</p>
        <pre><code className="html">
{`<p>This is a paragraph of text.</p>`}
        </code></pre>

        <h3>Links</h3>
        <p>Links {`<a>`} in HTML are used to create hyperlinks to other web pages, files, locations within the same page, or other resources on the internet. They allow users to navigate between different pages and access related content easily. Links are inline elements and are styled by default to appear as clickable text or images.</p>
        <pre><code className="html">
{`<a href="https://example.com">Visit Example</a>`}
        </code></pre>

        <h3>Images</h3>
        <p>Images {`<img>`} in HTML are used to embed images into web pages. They allow visual content such as photographs, illustrations, icons, and logos to be displayed within the content of a web page. Images are self-closing (void) elements and require attributes like src (source) and alt (alternative text) to specify the image file and provide text description for accessibility purposes.</p>
        <pre><code className="html">
{`<img src="image.jpg" alt="Description of the image">`}
        </code></pre>

        <h3>Lists (ordered and unordered)</h3>
        <p>Lists in HTML allow you to organize content into either ordered lists {`<ol>`} or unordered lists {`<ul>`}.</p>
        <ul>
            <li> <h5>Ordered Lists {`<ol>`}</h5>: Ordered lists are numbered lists where each list item {`<li>`} is preceded by a number or another sequential marker.</li>
            <li> <h5>Unordered Lists {`<ul>`}</h5>: Ordered lists are numbered lists where each list item {`<li>`} is preceded by a number or another sequential marker.</li>
        </ul>
        <p>Lists are useful for presenting items in a structured and easily readable format, such as navigation menus, steps in a process, or items in a collection.</p>
        <pre><code className="html">
{`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>`}
        </code></pre>

        <h3>Tables</h3>
        <p>Tables {`<table>, <tr>, <td>, <th>`} in HTML are used to display tabular data. They organize data into rows {`<tr>`} and columns ({`<td>`} for data cells, {`<th>`} for header cells). Tables are essential for presenting structured information like schedules, product comparisons, or statistical data in a grid format.</p>
        <pre><code className="html">
{`<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
    </tr>
</table>`}
        </code></pre>

        <h3>Forms and Input Elements</h3>
        <p>Forms {`<form>`} in HTML are used to collect user input. They contain various types of input elements ({`<input>, <textarea>, <select>, <button>`}, etc.) that allow users to enter data such as text, numbers, selections, and submit buttons. Forms are crucial for interactive web applications, user registrations, surveys, and more.</p>
        <pre><code className="html">
{`<form action="/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <br>
    <input type="submit" value="Submit">
</form>`}
        </code></pre>

        <h3>Div and Span</h3>
        <p><h5>Div {`(<div>)`}:</h5> The {`<div>`} element is a block-level container used to group and structure content within an HTML document. It is often used with CSS for layout purposes or to apply styling and formatting to groups of elements.</p>
        <p><h5>Span {`(<span>)`}:</h5> The {`<div>`} element is a block-level container used to group and structure content within an HTML document. It is often used with CSS for layout purposes or to apply styling and formatting to groups of elements.</p>
        <pre><code className="html">
{`<div>This is a division.</div>
<span>This is a span.</span>`}
        </code></pre>

        <h3>HTML5 Semantic Elements</h3>
        <pre><code className="html">
{`<header>
    <h1>Header Section</h1>
</header>

<footer>
    <p>Footer Section</p>
</footer>

<article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
</article>

<section>
    <h2>Section Title</h2>
    <p>Section content goes here.</p>
</section>

<nav>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</nav>

<aside>
    <p>Aside content goes here.</p>
</aside>`}
        </code></pre>

        <h3>Attributes</h3>
        <p>Global Attributes (class, id, style, title, lang)</p>
        <pre><code className="html">
{`<div class="container" id="main" style="background-color: lightblue;" title="Main Container" lang="en">
    Content
</div>`}
        </code></pre>

        <p>Event Attributes (onclick, onmouseover, etc.)</p>
        <pre><code className="html">
{`<button onclick="alert('Button Clicked!')">Click Me</button>`}
        </code></pre>
      </div>

      <div className="topic">
        <h2>HTML5 Features</h2>

        <h3>Audio and Video Elements</h3>
        <pre><code className="html">
{`<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
</audio>

<video controls width="320" height="240">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>`}
        </code></pre>

        <h3>Canvas</h3>
        <pre><code className="html">
{`<canvas id="myCanvas" width="200" height="100"></canvas>`}
        </code></pre>

        <h3>SVG (Scalable Vector Graphics)</h3>
        <pre><code className="html">
{`<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`}
        </code></pre>

        <h3>Geolocation</h3>
        <pre><code className="html">
{`<button onclick="getLocation()">Get Location</button>

<script>
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}
</script>`}
        </code></pre>

        <h3>Local Storage and Session Storage</h3>
        <pre><code className="html">
{`<script>
// Local Storage
localStorage.setItem("key", "value");
const storedValue = localStorage.getItem("key");

// Session Storage
sessionStorage.setItem("key", "value");
const sessionValue = sessionStorage.getItem("key");
</script>`}
        </code></pre>
      </div>

      <div className="topic">
        <h2>Best Practices</h2>

        <h3>Accessibility</h3>
        <p>Ensure your HTML content is accessible by using semantic elements (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, etc.), providing alternative text for images, and ensuring proper structure for screen readers.</p>

        <h3>SEO Basics</h3>
        <p>Use proper <code>&lt;title&gt;</code> tags, meta descriptions (<code>&lt;meta name="description" content="..."&gt;</code>), and semantic markup to improve search engine optimization.</p>

        <h3>Valid HTML</h3>
        <p>Always validate your HTML using tools like the W3C Markup Validation Service to ensure it follows the HTML specifications and is free of errors.</p>
      </div>
    </div>
  );
};

export default HTMLContent;
