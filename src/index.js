import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Student from './components/Index/student';
import Master from './components/Index/master'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

  return(
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/index/:user/master' element={<Master/>} />
            <Route path='/index/:user/student' element={<Student/>} />
        </Routes>
      </BrowserRouter>
  )
}

root.render(
      <App />
);

