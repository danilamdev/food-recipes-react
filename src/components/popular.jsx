import React, { useEffect, useState } from 'react'

export default function Popular () {
  const API_KEY = `apiKey=${import.meta.env.VITE_FOOD_API_KEY}`

  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?${API_KEY}`
  const [recipies, setRecipies] = useState([])

  const getPopular = async () => {
    const api = await fetch(apiUrl)
    const { results } = await api.json()
    setRecipies(results)
    console.log(results)
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <>
    <h1>popular</h1>
    {recipies.map(res => {
      return (
        <div key={res.id}>
          <p>{res.title}</p>
          <img src={res.image} alt="imagen" width={64} height={64} />
        </div>
      )
    }
    )}

    </>

  )
}
