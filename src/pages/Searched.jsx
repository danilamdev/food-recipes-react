import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Searched () {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const params = useParams()

  const getSearch = async (name) => {
    const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&query=${name}`
    const data = await fetch(apiUrl)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearch(params.search)
  }, [params.search])

  return (
   <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
   {searchedRecipes.map(item => {
     return (
       <Card key={item.id}>
         <Link to={'/recipe/' + item.id}>
           <img src={item.image} alt="" />
           <h4>{item.title}</h4>
         </Link>
       </Card>
     )
   })}
 </Grid>
  )
}

const Grid = styled(motion.div)`
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
    color: black;
  }
`
