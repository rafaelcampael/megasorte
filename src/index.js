import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import Sort from './components/sort/Sort';
import './stylegeral.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Navbar/>
    </div>
    
    <div>
        <Sort/>
    </div>
     
  </React.StrictMode>
);
