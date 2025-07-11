import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import ProductList from './product/productList'
import Filter from './features/filter/filter'
import { TopicProvider } from './store/topicContext'

function App() {

  return (
    <TopicProvider>
    <section className='font-sans'>
        <Header />
    </section>
    </TopicProvider>
  )
}

export default App
