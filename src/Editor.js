
import React, { useRef, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Learn from './Learn';
import './Editor.css';

const Editor = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const outputRef = useRef();

  const runCode = () => {
    const output = outputRef.current;
    const combinedCode = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    `;
    output.srcdoc = combinedCode;
  };

  return (
    <div className="App">
      {/* <nav> */}
        {/* <h1 className="nav-heading">HTML/CSS/JavaScript Bootcamp</h1> */}
        {/* <Link to="/learn" className="nav-link">Learn</Link> */}
        <button id="run" onClick={runCode}>Run</button>
      {/* </nav> */}
      <div className="file-nav">
        <button onClick={() => setActiveTab('html')}>HTML</button>
        <button onClick={() => setActiveTab('css')}>CSS</button>
        <button onClick={() => setActiveTab('js')}>JavaScript</button>
      </div>
      <div className="editor-structure">
        {activeTab === 'html' && (
          <div className="codeTextArea">
            <CodeMirror
              value={htmlCode}
              extensions={[html()]}
              onChange={(value) => setHtmlCode(value)}
              placeholder="Write HTML here..."
            />
          </div>
        )}
        {activeTab === 'css' && (
          <div className="codeTextArea">
            <CodeMirror
              value={cssCode}
              extensions={[css()]}
              onChange={(value) => setCssCode(value)}
              placeholder="Write CSS here..."
            />
          </div>
        )}
        {activeTab === 'js' && (
          <div className="codeTextArea">
            <CodeMirror
              value={jsCode}
              extensions={[javascript()]}
              onChange={(value) => setJsCode(value)}
              placeholder="Write JavaScript here..."
            />
          </div>
        )}
        <iframe ref={outputRef} className="outputTextArea"></iframe>
      </div>

      <Routes>
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
};

export default Editor;
