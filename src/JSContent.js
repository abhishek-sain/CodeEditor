import React from "react";
import "./HTMLContent.css";

const JSContent = () => {
  return (
    <>
      <div className="content">
        <div className="topic">
          <h2>What is JavaScript?</h2>
          <p>
          JavaScript is a high-level, interpreted programming language primarily used for creating interactive and dynamic web content. It allows developers to manipulate web page elements, respond to user actions, and communicate with servers. JavaScript is a core technology of the web alongside HTML and CSS.
          </p>
        </div>
        <div className="topic">
          <h2>Linking JavaScript to HTML</h2>
          <p>
          JavaScript can be linked to an HTML document in several ways:
          </p>
          <ol>
            <li>
              <h5>Inline Scripting:</h5>
            <pre>
            <code className="html">{`<script>
    // JavaScript code here
</script>
`}</code>
          </pre>
            </li>
            <li>
              <h5>Internal Script:</h5>
            <pre>
            <code className="html">{`<script src="script.js"></script>

`}</code>
          </pre>
            </li>
            <li>
              <h5>External Script:</h5>
            <pre>
            <code className="html">{`<script src="https://example.com/script.js"></script>

`}</code>
          </pre>
            </li>
          </ol>
          <h2>Variables (var, let, const): <p>Variables are containers for storing data values. They are declared using var, let (block-scoped), or const (block-scoped, immutable).</p>
          </h2>
          <h2>Data Types</h2>
          <p><h5>Primitive Types: </h5>string, number, boolean, null, undefined.</p>
          <p><h5>Complex Types: </h5>array, object.</p>
          <h2>Operators</h2>
          <p><h5>Arithmetic: </h5> +, -, *, /, %.</p>
          <p><h5>Comparison: </h5> {`==, ===, !=, !==, >, <, >=, <=.`}</p>
          <p><h5>Logical: </h5> &&, ||, !.</p>
          <p><h5>Assignment: </h5> {`=, +=, -=, *=, /=, %=.`}</p>

          <h2>Conditional Statements:</h2>
          <h5>If Statement:</h5>
          <pre>
            <code className="html">{`if (condition) {
    // code block
} else if (anotherCondition) {
    // code block
} else {
    // code block
}

`}</code>
          </pre>
          <h5>Switch Statement:</h5>
          <pre>
            <code className="html">{`switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}`}</code>
          </pre>
          <h2>Loops:</h2>
          <h5>For Loop:</h5>
          <pre>
            <code className="html">{`for (let i = 0; i < 5; i++) {
    // code block
}


`}</code>
          </pre>
          <h5>While Loop:</h5>
          <pre>
            <code className="html">{`let i = 0;
while (i < 5) {
    // code block
    i++;
}
`}</code>
          </pre>
          <h5>Do...While Loop:</h5>
          <pre>
            <code className="html">{`let i = 0;
do {
    // code block
    i++;
} while (i < 5);

`}</code>
          </pre>
          <h2>Functions:</h2>
          <h5>Function Declaration:</h5>
          <pre>
            <code className="html">{`function add(a, b) {
    return a + b;
}

`}</code>
          </pre>
          <h5>Function Expression:</h5>
          <pre>
            <code className="html">{`const multiply = function(a, b) {
    return a * b;
};

`}</code>
          </pre>
          <h5>Arrow Functions:</h5>
          <pre>
            <code className="html">{`const square = (x) => x * x;

`}</code>
          </pre>
          <h5>Return Statements:</h5>
          <pre>
            <code className="html">{`function isAdult(age) {
    return age >= 18;
}

`}</code>
          </pre>


          <h2>DOM Manipulation:</h2>
          <h5>getElementById:</h5>
          <pre>
            <code className="html">{`const element = document.getElementById('myId');

`}</code>
          </pre>
          <h5>querySelector:</h5>
          <pre>
            <code className="html">{`const element = document.querySelector('.myClass');

`}</code>
          </pre>
          <h5>Changing Content and Attributes:</h5>
          <pre>
            <code className="html">{`element.innerHTML = 'New content';
element.setAttribute('class', 'newClass');


`}</code>
          </pre>
          <h5>Event Handling:</h5>
          <pre>
            <code className="html">{`element.addEventListener('click', function() {
    console.log('Clicked!');
});


`}</code>
          </pre>
          <h5>Creating and Removing Elements:</h5>
          <pre>
            <code className="html">{`const newElement = document.createElement('div');
element.appendChild(newElement);

element.removeChild(newElement);


`}</code>
          </pre>
          <h2>ES6 Features</h2>
          <h5>Destructuring</h5>
          <pre>
            <code className="html">{`const { firstName, lastName } = person;

`}</code>
          </pre>
          <h5>Spread and Rest Operators:</h5>
          <pre>
            <code className="html">{`const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];


`}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default JSContent;
