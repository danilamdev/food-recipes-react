import React from 'react'
import Category from './components/category'
import Pages from './pages/pages'
import { BrowserRouter } from 'react-router-dom'

export default function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}
