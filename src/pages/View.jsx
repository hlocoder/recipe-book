import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const View = () => {
    let location = useLocation();
    console.log(location)
    let recipe = location.state.recipe

  return (
    <div className='container '>
        <div className="row">
          <div className="col-md-4 bg-info d-flex justify-content-center">
            <img src={location.state.recipe.image} alt="" />
          </div>
          <div className="col-md-8 bg-warning">
              <h3 className='my-3'>Title: {recipe.label}</h3>
              <h4 className='my-3'>MealType: {recipe.mealType[0]}</h4>
              <h5 className='my-3'>cuisineType: {recipe.cuisineType}</h5>
              <Link to={recipe.url} className='btn btn-info my-3'>Recipe method</Link>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <ul>
              <h3> Ingredient lines</h3>
              {recipe.ingredientLines.map((ele)=>{
                return <li>{ele}</li>
              })}
            </ul>
          </div>
          <div className="col-md-6">
         
          <ul>
              <h3>  healthLabels</h3>
              {recipe.healthLabels.map((ele)=>{
                return <li>{ele}</li>
              })}
            </ul>
          </div>
        </div>
     
    </div>
  )
}

export default View
