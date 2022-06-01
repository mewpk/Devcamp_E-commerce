import React from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
          <Route path='/' element={<ProductList/>}></Route>
      </Routes>
    </Router>
    </>

  
  )
}
