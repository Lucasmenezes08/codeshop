import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import ProductList from './product/productList'
import Filter from './features/filter/filter'
import { TopicProvider } from './store/topicContext'
import { DarkProvider } from './store/darkContext'

function App() {

  return (
    <DarkProvider>
    <TopicProvider>
    <section className='font-sans'>
        <Header />
    </section>
    </TopicProvider>
    </DarkProvider>
  )
}

export default App
