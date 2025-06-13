import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Read from './components/Read'
import Update from './components/Update'
import Create from './components/Create'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="APP">
        <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route exact path='/create' element= {<Create />}/>
        <Route exact path='/read' element= {<Read />}/>
        <Route exact path='/edit/:id' element= {<Update />}/>
      </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
