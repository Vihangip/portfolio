import React from 'react';
import './App.css'; 

const TooBigScreen = () => {
  return (
    <div className="unsupported-container">
      <h1 className="unsupported-heading">Unsupported Screen Size</h1>
      <p className="unsupported-message">Sorry, this screen size is not supported. Please Zoom in.</p>
    </div>
  );
};

export default TooBigScreen;
