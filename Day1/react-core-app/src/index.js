// React 17
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

// // -----------------------------------------------------------
// // React 18
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// reportWebVitals();

// ----------------------------------------------------------- Using CSS
// // Application Level CSS / Global CSS
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// reportWebVitals();

// ----------------------------------------------------------- Use Bootstrap
// npm i bootstrap bootstrap-icons

// Application Level CSS / Global CSS
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloComponent />
//   </React.StrictMode>
// );

// reportWebVitals();

// ---------------------------------------------------- Multi Components

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap';
// import ComponentOne from './components/2_multi-components/ComponentOne';
// import ComponentTwo from './components/2_multi-components/ComponentTwo';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <ComponentOne />
// //     <ComponentTwo />
// //   </React.StrictMode>
// // );

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
//   <React.StrictMode>
//     <ComponentOne />
//   </React.StrictMode>
// );

// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(
//   <React.StrictMode>
//     <ComponentTwo />
//   </React.StrictMode>
// );

// reportWebVitals();

// ---------------------------------------------------- Using One Root
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

reportWebVitals();