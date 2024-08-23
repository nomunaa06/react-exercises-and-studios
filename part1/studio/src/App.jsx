import { useState } from 'react'
import './App.css'
// adding some imports for first and second part

import RecipeDescription from './components/Description'
import RecipeIngredients from './components/Ingredients'
import RecipePhoto from './components/Photos'


function App() {
  return (
    <>
      <div className="App">
        <div className="recipePhotoBlock">
        <RecipePhoto />
          <div className="recipePhotoBlock">
            <RecipeDescription />
            <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
