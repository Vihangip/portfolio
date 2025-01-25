import React from 'react';

const TooSmallScreen = () => {
  return (
    <div className="unsupported-container">
      <h1 className="unsupported-heading">Unsupported Screen Size</h1>
      <p className="unsupported-message">Sorry, this screen size is not supported. Please use a device with a larger screen.</p>
    </div>
  );
};

export default TooSmallScreen;
