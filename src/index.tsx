import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import mockData from './mockData-TRAILS.json' 

console.log(mockData[0].name)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

