import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

import configureStore from './store/configureStore';
import * as counterActions from './actions/counterActions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RootComponent />
  // </React.StrictMode>
);

reportWebVitals();

// const appStore = configureStore();
// console.log(appStore);
// console.log(appStore.getState());

// const appStore = configureStore({ counterReducer: 1000 });
// console.log(appStore);
// console.log(appStore.getState());

const appStore = configureStore();
console.log("Loaded State:", appStore.getState());

appStore.subscribe(() => {
  console.warn("Store State Change Detected");
  console.log("New State:", appStore.getState());
});

// Take the actions to be performed from Action Creator
// Dispatch actions to modify the store

let incAction = counterActions.incCounter();
let decAction = counterActions.decCounter();

// When we dispatch the action, reducer will take it and modify the store
appStore.dispatch(incAction);
appStore.dispatch(incAction);
appStore.dispatch(decAction);