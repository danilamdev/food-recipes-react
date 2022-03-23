import React from 'react'
import Category from './components/category'
import Pages from './pages/pages'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import Search from './components/Search'
import { GiKnifeFork } from 'react-icons/gi'

export default function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Food<span>App</span></Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }

  span {
    font-weight: bold;
    color: lightcoral;
    padding: 0;
  }
`
