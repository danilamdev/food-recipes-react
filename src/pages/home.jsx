import React from 'react'
import Veggie from '../components/veggie'
import Popular from '../components/popular'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Home () {
  const { isTablet, isDesktop } = useMediaQuery()
  //   const isTablet = result === 'tablet'
  //   const isDesktop = result === 'desktop'

  return (
     <div>
        <h1 className='home-title' >Home - {isTablet ? 'tablet' : isDesktop ? 'desktop' : 'mobile'} </h1>
        <Veggie />
        <Popular />
     </div>
  )
}
