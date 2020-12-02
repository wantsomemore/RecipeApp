import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) => {

  return(
    <div className='receipt-box'>
    <div className={style.recipe}>
      <h1 className='title'>{title}</h1>
      <ol className='ingredients'>
        {ingredients.map(ingredient => (
          <li className='ingredient'>{ingredient.text}</li>
         ))}
      </ol>
      <p className='calories'><b>{calories} calories </b></p>
      <img className={style.image} src={image} alt=''/>
      
    </div>
    </div>
  )
}
export  default Recipe