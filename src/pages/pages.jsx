import React from 'react'
import Home from './home'
import Cuisine from './Cuisine'
import { Route, Routes } from 'react-router-dom'

export default function Pages () {
  return (
      <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cuisine/:type' element={<Cuisine />}/>
          </Routes>
      </div>
  )
}
