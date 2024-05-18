// src/App.tsx
import React from 'react';
import './App.css';
import ImageCaptionView from './features/images/view/ImageCaptionView';

const App: React.FC = () => {
  return (
    <div className="App">
      <ImageCaptionView />
    </div>
  );
};

export default App;
