import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'

export default function Recipe () {
  const params = useParams()
  const [details, setDetails] = useState('')
  const [activeTab, setActiveTab] = useState('instructions')
  const { isMobile, isTablet } = useMediaQuery()

  const fetchDetails = async () => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_FOOD_API_KEY}`)
      const detailData = await data.json()
      setDetails(detailData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('EFFECT')
    fetchDetails()
  }, [params.name])

  return (

  <DetailWrapper isMobile={isMobile} isTablet={isTablet} >
      <div className='left-container'>
         <h2>{details.title}</h2>
         <img src={details.image} alt='image' />
      </div>
      <Info>
         <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
         <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
         {activeTab === 'instructions' && (
            <div >
               <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
               <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
             </div>
         )}
         {activeTab === 'ingredients' && (
             <ul>
             {details.extendedIngredients.map((ingredient, i) =>
                <li key={i}>{ingredient.original}</li>
             )}
          </ul>
         )}

      </Info>
   </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
   margin-top: 10rem;
   margin-bottom: 5rem;
   display: flex;
   gap: 1em;
   flex-direction: ${({ isMobile, isTablet }) => isMobile || isTablet ? 'column' : 'row'}  ;
   align-items: ${({ isMobile, isTablet }) => isMobile || isTablet ? 'center' : 'auto'} ;

   .left-container {
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
   }
   .active {
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
   }
   h2 {
      margin-bottom: 2rem;
      text-align: center;
   }
   img {
      width: 100%;
      max-width: 600px;
      text-align: center;
      border-radius: 1em;
      box-shadow: 0 10px 20px rgba(0,0,0,.3);
   }
   li {
      font-size: 1.2rem;
      line-height: 2.5rem;
   }

   ul {
      margin-top: 2rem;
   }
`

const Button = styled.button`
   padding: 1rem 2rem;
   color: #313131;
   background: white;
   border: 2px solid black;
   margin-right: 2rem;
   font-weight: 600;
   cursor: pointer;
`

const Info = styled.div`
   text-align: left;
   width: 100%;
   padding-inline: 20px;

`
