import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

export default function Popular () {
  const recipes = [...Array(9)].map((r, i) => ({ title: 'buenos dias foto', image: '/food.jpg', id: i }))
  // const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`

  // const apiUrl = `https://api.spoonacular.com/recipes/random?${API_KEY}&number=9`
  const [popular, setPopular] = useState(recipes)
  console.log(popular)
  // const getPopular = async () => {
  //   const api = await fetch(apiUrl)
  //   const data = await api.json()
  //   console.log(data)

  //   setPopular(data.recipes)
  // }

  // useEffect(() => {
  //   getPopular()
  // }, [])

  return <div>
        <Wrapper>
          <h3>Popular picks</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '4rem'
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

const Wrapper = styled.div`
    margin: 4rem 0rem;
  `
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    font-weight: bold;
    background-color: black;
    text-align: center;
    text-transform: uppercase;
  }
`
