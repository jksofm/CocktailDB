import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {cocktails} = useGlobalContext()
  const {id} = useParams();
  return (
   cocktails.map((cocktail)=>{
    if(cocktail.id === id){
      return (

   <section key={id} className="section cocktail-section">
    <Link to='/' className="btn btn-primary">back home</Link>
    <h2 className="section-title">{cocktail.name}</h2>
    <div className="drink">
      <img src={cocktail.image} alt={cocktail.name} />
      <div className="drink-info">
        <p>
          <span className="drink-data"> name : </span>
          {cocktail.name}
        </p>
        <p>
          <span className="drink-data"> category : </span>
          {cocktail.category}
        </p>
        <p>
          <span className="drink-data"> info : </span>
          {cocktail.info}
        </p>
        <p>
          <span className="drink-data"> glass : </span>
          {cocktail.glass}
        </p>
        <p>
          <span className="drink-data"> instructions : </span>
          {cocktail.instructions}
        </p>
        <p>
          <span className="drink-data"> ingridients : </span>
          {cocktail.ingredient.map((item,index)=>{
           return <span key={index}>{item}</span>
          })}
        </p>

      </div>

    </div>
    
   </section>
      )
    }
   })
  )
}

export default SingleCocktail
