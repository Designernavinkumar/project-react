import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App'
// import ShowTime from './Componets/ShowTime';
// import Toggle from './Componets/ToggleButton';
// import OnBoarding from './Componets/OnBoarding';
// import Form from './Componets/Form';
import ComponetForList from './Componets/List';
const list =[1,2,3,4,5];
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <div>
         <ComponetForList list={list} />
    </div>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
