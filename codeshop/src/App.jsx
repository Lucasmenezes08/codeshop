import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import ProductList from './product/productList'

function App() {

  return (
    <>
        <Header />
        <ProductList/>
    </>
  )
}

export default App
