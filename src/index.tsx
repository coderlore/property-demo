import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('../data/db.json')
// const middlewares = jsonServer.defaults()

// //Setup Server
// server.use(middlewares)
// server.use(router)
// server.listen(8000, () => {
//   console.log('JSON Server is running')
// })

// import Data from './Data'
// import mockData from './mockData-TRAILS.json' 

// console.log(mockData)
// http://localhost:8000/listing?_sort=name&_order=asc

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

