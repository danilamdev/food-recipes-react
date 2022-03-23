import React, { useState, useEffect } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { Wrapper, Card } from './slidestyle'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

export default function Veggie () {
  // const recipes = [...Array(9)].map((r, i) => ({ title: 'Almost before we know it', image: '/food.jpg', id: i }))
  const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`
  const apiUrl = `https://api.spoonacular.com/recipes/random?${API_KEY}&number=9&tags=vegetarian`

  const { isDesktop, isMobile } = useMediaQuery()

  const [veggie, setVeggie] = useState([])

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')
    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(apiUrl)
      const data = await api.json()
      setVeggie(data.recipes)
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getVeggie()
  }, [])

  return <div>
        <Wrapper>
          <h3>Veggie picks</h3>
          <Splide options={{
            perPage: isMobile ? 1 : 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem'
          }}>
          {veggie.map(recipe => {
            return (
            <SplideSlide key={recipe.id}>
              <Card >
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Card>
            </SplideSlide>
            )
          })}
          </Splide>
        </Wrapper>

  </div>
}
