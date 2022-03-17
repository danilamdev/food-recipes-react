import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

export default function Cuisine () {
  const params = useParams()

  const [cuisine, setCuisine] = useState([])

  const getCuisine = async (name) => {
    const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&cuisine=${name}`
    const data = await fetch(apiUrl)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }

  useEffect(() => {
    getCuisine('italian')
    console.log(params)
  }, [params.type])

  return (
      <Grid>
        {cuisine.map(item => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          )
        })}
      </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    font-weight: normal;
  }
`
