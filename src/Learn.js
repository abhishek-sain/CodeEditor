import React, { useState } from 'react';
import HTMLContent from './HTMLContent';
import CSSContent from './CSSContent';
import JSContent from './JSContent';
import './Learn.css';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className="learn-container">
      <div className="left-sidebar">
        <h2>Topics</h2>
        <ul>
          <li className={activeTab === 'html' ? 'active' : ''} onClick={() => setActiveTab('html')}>HTML</li>
          <li className={activeTab === 'css' ? 'active' : ''} onClick={() => setActiveTab('css')}>CSS</li>
          <li className={activeTab === 'js' ? 'active' : ''} onClick={() => setActiveTab('js')}>JavaScript</li>
        </ul>
      </div>
      <div className="right-sidebar">
        {activeTab === 'html' && <HTMLContent />}
        {activeTab === 'css' && <CSSContent />}
        {activeTab === 'js' && <JSContent />}
      </div>
    </div>
  );
};

export default Learn;
