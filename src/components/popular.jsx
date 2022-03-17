import React, { useEffect, useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { Wrapper, Card } from './slidestyle'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

export default function Popular () {
  // const recipes = [...Array(9)].map((r, i) => ({ title: 'Almost before we know it', image: '/food.jpg', id: i }))
  const { isDesktop, isMobile } = useMediaQuery()
  const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`
  const apiUrl = `https://api.spoonacular.com/recipes/random?${API_KEY}&number=9`

  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(apiUrl)
      const data = await api.json()
      setPopular(data.recipes)

      localStorage.setItem('popular', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getPopular()
  }, [])

  return <div>
        <Wrapper>
          <h3>Popular picks</h3>
          <Splide options={{
            perPage: isMobile ? 1 : isDesktop ? 5 : 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem'
          }}>
          {popular.map(recipe => {
            return (
            <SplideSlide key={recipe.id}>
              <Card >
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
            )
          })}
          </Splide>
        </Wrapper>

  </div>
}
