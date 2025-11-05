import { useState } from 'react'

import './App.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEmployee from './Components/AddEmployee'
import Chat from './Components/Chat'


function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
           <Route path='/' element={<ListEmployeeComponent/>}/>
           <Route path='/employees' element={<ListEmployeeComponent/>}/>
           <Route path='/add-employee' element={<AddEmployee/>}/>
           <Route path='/update-employee/:id' element={<AddEmployee/>}/>
     </Routes>
      
      <Chat/>

      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
