import React from 'react'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import logo from './assets/logo.svg';
import {Home, CreateImage} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#1e2124] sm:px-8 px-4 py-4 border-b border-b-[#7289da]'>
        <Link to='/'>
          <img src={logo} alt="Logo de l'application" className='w-12 object-contain bg-white' /> 
        </Link>
        <Link to='/create-image' className=' font-nunito font-medium bg-[#7289da] text-white px-4 py-2 rounded-md hover:bg-[#817ACF] delay-75 transition ease-in'>
          Imagine !
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-81px)] bg-[#1e2124]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-image' element={<CreateImage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App