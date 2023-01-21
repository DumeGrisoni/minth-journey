import React from 'react'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import {logo} from './assets/logo.svg';
import {Home, CreateImage} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt="Logo de l'application" className='w-28 object-contain' /> 
          
        </Link>
      </header>
    </BrowserRouter>
  )
}

export default App