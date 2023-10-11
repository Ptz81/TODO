// import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/TODO">
      <App />
     </BrowserRouter>
    
  </Provider>
);