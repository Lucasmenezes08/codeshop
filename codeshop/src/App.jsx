import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import ProductList from './product/productList'
import Filter from './features/filter/filter'

function App() {

  return (
    <section className='font-sans'>
        <Header />
    </section>
  )
}

export default App
