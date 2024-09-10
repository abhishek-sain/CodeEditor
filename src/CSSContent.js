import React from "react";
import "./HTMLContent.css";
const HTMLContent = () => {
  return (
    <div className="content">
      <div className="topic">
        <h2>Introduction to CSS</h2>
        <h2>What is CSS?</h2>
        <p>
          CSS (Cascading Style Sheets) is a styling language used to describe
          the presentation of a document written in HTML or XML. It defines how
          HTML elements should be displayed on screen, in print, or in other
          media types. CSS enables developers to separate content from
          presentation, making it easier to manage the layout and appearance of
          web pages.
        </p>
      </div>

      <div className="topic">
        <h2>Purpose of CSS:</h2>
        <p>CSS serves several key purposes in web development:</p>
        <ol>
          <li>
            <h5>Styling:</h5> CSS allows developers to control the visual
            appearance of HTML elements. This includes defining colors, fonts,
            spacing, and layout.
          </li>
          <li>
            <h5>Consistency:</h5> By applying consistent styles across multiple
            pages, CSS ensures a cohesive look and feel for a website.
          </li>
          <li>
            <h5>Accessibility:</h5> CSS helps improve accessibility by allowing
            developers to control how content is presented to users, including
            those using assistive technologies.
          </li>
          <li>
            <h5>Responsive Design:</h5> CSS plays a crucial role in creating
            responsive web designs that adapt to different screen sizes and
            devices.
          </li>
        </ol>
        <h2>Benefits of Using CSS:</h2>
        <ol>
          <li>
            <h5>Separation of Concerns:</h5> CSS separates the structure (HTML)
            from the presentation (CSS) and behavior (JavaScript), making code
            easier to maintain and update.
          </li>
          <li>
            <h5>Efficiency:</h5> Once defined, CSS styles can be applied to
            multiple elements across multiple pages, reducing redundancy and
            saving development time.
          </li>
          <li>
            <h5>Flexibility:</h5> CSS offers a wide range of styling options,
            from basic fonts and colors to complex animations and layouts,
            giving developers creative control over design elements.
          </li>
        </ol>
      </div>
      <div className="topic">
        <h2>Types of CSS:</h2>
        <p>
          <h5>Inline CSS:</h5>Applied directly to an HTML element using the
          style attribute. It overrides external and internal styles.
        </p>
        <pre>
          <code className="html">
            {`<p style="color: blue; font-size: 16px;">This is a paragraph.</p>
`}
          </code>
        </pre>
      </div>

      <div className="topic">
        <p>
          <h5>Internal CSS:</h5>Defined within the {`<style>`} element in the{" "}
          {`<head>`} section of an HTML document. It applies styles to specific
          pages.
        </p>
        <pre>
          <code className="html">
            {`<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>

`}
          </code>
        </pre>
        <p>
          <h5>External CSS:</h5>Linked to an HTML document using the {`<link>`}{" "}
          element. It separates style from content and allows for consistent
          styling across multiple pages.
        </p>
        <pre>
          <code className="html">
            {`<head>
    <link rel="stylesheet" href="styles.css">
</head>`}
          </code>
        </pre>
        <p>
          CSS is fundamental to modern web design, providing the tools and
          techniques necessary to create visually appealing, accessible, and
          responsive websites. Understanding CSS empowers developers to enhance
          user experiences through effective design and presentation.
        </p>
      </div>
      <div className="topic">
        <p>
          <h2>Selectors:</h2>Selectors target specific HTML elements to apply
          styles. Here are the basic types:
        </p>
        <p>
          <h5>Element Selector:</h5>Targets all instances of a specific HTML
          element.
        </p>
        <pre>
          <code className="html">
            {`p {
    color: blue;
}`}
          </code>
        </pre>
        <p>
          <h5>Class Selector:</h5>Targets elements with a specific class
          attribute.
        </p>
        <pre>
          <code className="html">
            {`.highlight {
    background-color: yellow;
}
`}
          </code>
        </pre>
        <p>
          <h5>Attribute Selector: </h5>Targets elements with a specific
          attribute or attribute value.
        </p>
        <pre>
          <code className="html">
            {`input[type="text"] {
    border: 1px solid #ccc;
}
`}
          </code>
        </pre>
        <p>
          <h5>Pseudo-classes and Pseudo-elements:</h5>Target elements in special
          states or parts of elements not directly selectable by simple
          selectors.
        </p>
        <pre>
          <code className="html">
            {`a:hover {
    color: red;
}

p::first-line {
    font-weight: bold;
}
`}
          </code>
        </pre>
        <p>
          <h5>Combinators:</h5>Specify relationships between selectors.
        </p>
        <pre>
          <code className="html">
            {`div p {
    margin-bottom: 10px; /* Selects <p> elements that are descendants of <div> elements */
}

h1 + p {
    font-style: italic; /* Selects <p> immediately following an <h1> */
}

`}
          </code>
        </pre>
        <div className="topic">
          <h2>Z-index:</h2>
          <p>Controls the stacking order of positioned elements.</p>
          <pre>
            <code className="html">
              {`<p style="color: blue; font-size: 16px;">This is a paragraph.</p>
`}
            </code>
          </pre>
        </div>
        <div className="topic">
          <h2>Flexbox:</h2>
          <p>
            <h5>Flex Container:</h5> Parent element setting up a flex context.
          </p>
          <pre>
            <code className="html">
              {`.flex-container {
    display: flex;
    flex-direction: row; /* or column */
    justify-content: center;
    align-items: center;
}

`}
            </code>
          </pre>
          <p>
            <h5>Flex Items:</h5> Child elements within a flex container.
          </p>
          <pre>
            <code className="html">
              {`.flex-item {
    flex: 1; /* Flex-grow, flex-shrink, and flex-basis combined */
}`}
            </code>
          </pre>
        </div>
        <div className="topic">
          <h2>Grid Container and Items:</h2>
          <p>
            <h5>Grid Container:</h5> Parent element setting up a grid context.
          </p>
          <pre>
            <code className="html">
              {`.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Defines columns */
    grid-template-rows: auto; /* Defines rows */
    gap: 10px; /* Space between grid items */
}

`}
            </code>
          </pre>
          <p>
            <h5>Grid Items:</h5> Child elements within a grid container.
          </p>
          <pre>
            <code className="html">
              {`.grid-item {
    grid-column: 1 / 3; /* Spans from column line 1 to column line 3 */
    grid-row: 1; /* Occupies row line 1 */
}
`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HTMLContent;
