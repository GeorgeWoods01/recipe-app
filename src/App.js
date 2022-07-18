import React, {useState} from 'react';
import axios from 'axios';



function App() {
  const [data, setData] = useState({})
  const [recipe, setRecipe] = useState('')
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
  const searchRecipe = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setRecipe('')
    }
  }

  return (
    <div>
    {data.meals ?
    (<div className="app">
      <div className="title-text">
        <h1>Find That Recipe</h1>
      </div>
      <div className="search">
        <input
        value={recipe}
        onChange={event => setRecipe(event.target.value)}
        onKeyPress={searchRecipe}
        placeholder='Write something tasty'
        type="text"
        />
      </div>

      {data.meals ? data.meals.map((meal, index) => (
      <div className="container">
        <div className="top">
          <div className="name">
            {meal ? <h1>{meal.strMeal}</h1> : null}
          </div>
          <div className="description">
            {meal ? <p>{meal.strGlass}</p> : null}
            {meal ? <p>{meal.strInstructions}</p> : null}
          </div>
          <div className="bottom">
            <div className="ingredients">
              {meal ? <p className='bold'>{meal.strIngredient1}</p> : null}
              {meal ? <p>{meal.strMeasure1}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient2}</p> : null}
              {meal ? <p>{meal.strMeasure2}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient3}</p> : null}
              {meal ? <p>{meal.strMeasure3}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient4}</p> : null}
              {meal ? <p>{meal.strMeasure4}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient5}</p> : null}
              {meal ? <p>{meal.strMeasure5}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient6}</p> : null}
              {meal ? <p>{meal.strMeasure6}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient7}</p> : null}
              {meal ? <p>{meal.strMeasure7}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient8}</p> : null}
              {meal ? <p>{meal.strMeasure8}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient9}</p> : null}
              {meal ? <p>{meal.strMeasure9}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient10}</p> : null}
              {meal ? <p>{meal.strMeasure10}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient11}</p> : null}
              {meal ? <p>{meal.strMeasure11}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient12}</p> : null}
              {meal ? <p>{meal.strMeasure12}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient13}</p> : null}
              {meal ? <p>{meal.strMeasure13}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient14}</p> : null}
              {meal ? <p>{meal.strMeasure14}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient15}</p> : null}
              {meal ? <p>{meal.strMeasure15}</p> : null}
              {meal ? <p className='bold'>{meal.strIngredient16}</p> : null}
              {meal ? <p>{meal.strMeasure16}</p> : null}
            </div>
            <div className="image">
              {meal ? <img src={meal.strMealThumb} alt="Meal" /> : null }
            </div>
          </div>
        </div>
      </div>
      )) : null}

    </div>) :
      <div className="search-container">
        <div className="title-text">
          <h1>Find That Recipe</h1>
        </div>
        <div className="search">
          <input
          value={recipe}
          onChange={event => setRecipe(event.target.value)}
          onKeyPress={searchRecipe}
          placeholder='Search by Name'
          type="text"
          />
        </div>
      </div>
    }
    </div>
  );
}

export default App;
