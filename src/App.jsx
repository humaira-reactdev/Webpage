import { useState } from 'react'

import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Work from './Pages/Work'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={route}/>
      
    </>
  )
}

export default App
