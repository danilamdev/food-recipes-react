import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Category () {
  return (
      <List>
         <StyledNavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
         </StyledNavLink>

         <StyledNavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
         </StyledNavLink>

         <StyledNavLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
         </StyledNavLink>

         <StyledNavLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
         </StyledNavLink>
      </List>
  )
}

const List = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   gap: 1em;
   margin: 2rem auto;
`

const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-weight: normal;
   border-radius: 50%;
   background: linear-gradient(35deg, #494949, #313131);
   min-width: 5rem;
   height: 5rem;
   cursor: pointer;
   transform: scale(.9);

   &.active {
      background: linear-gradient(to right, #f27121, #e94057);

      svg {
         color: white;
      }

      h4 {
         color: white;
      }
   }

   h4 {
      font-size: .7rem;
      font-weight: normal;
      margin-top: .7em;
      color: white;
   }

   svg {
      color: white;
      font-size: 1.5rem;
   }

  
`
