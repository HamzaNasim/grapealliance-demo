
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './containers/productDetails'
import ProductsOverview from './containers/productsOverview'


const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductsOverview />}/>
      <Route path='/details' element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App