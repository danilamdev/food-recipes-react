import { useEffect, useState } from 'react'

const SIZE_SCREEN = {
  desktop: '(min-width: 1480px)',
  tablet: '(min-width: 1024px)',
  mobile: '(min-width: 550px)'
}

export default function useMediaQuery () {
  const [device, setDevice] = useState('')

  const getDevice = (SIZE_SCREEN) => {
    for (const [device, size] of Object.entries(SIZE_SCREEN)) {
      const test = window.matchMedia(size).matches
      if (test) {
        setDevice(device)
        break
      }
    }
  }
  useEffect(() => {
    console.log('effect')
    getDevice(SIZE_SCREEN)
    window.addEventListener('resize', () => getDevice(SIZE_SCREEN))
    return () => window.removeEventListener('resize', () => getDevice(SIZE_SCREEN))
  }, [])

  const isTablet = device === 'tablet'
  const isDesktop = device === 'desktop'
  const isMobile = device === 'mobile'
  return ({ isDesktop, isTablet, isMobile })
}
