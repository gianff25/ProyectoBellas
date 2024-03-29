import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { router } from './Routing';
import { BrowserRouter } from 'react-router-dom';
import InitialProvider from './componentes/variables-globales/initialProvider';
import LogRocket from 'logrocket';

LogRocket.init('7so3ue/bellasbeautyroom', {
    name: 'Iván',
    email: 'givanff25@gmail.com',
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <InitialProvider>
       <App />
      </InitialProvider>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
