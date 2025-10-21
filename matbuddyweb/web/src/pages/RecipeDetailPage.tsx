import { useEffect, useState } from 'react'
import { useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RecipeDetailPage = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      const data = await response.json()
      setMeal(data.meals ? data.meals[0] : null)
    }
    fetchMeal()
  }, [id])

  if (!meal) return <p>Laster oppskrift...</p>

  return (
    <div className="p-6">
      <Metadata title={meal.strMeal} description="Oppskriftsdetalj" />

      <h1 className="text-2xl font-bold text-center mb-4">Oppskriftsdetalj</h1>

      <div className="max-w-md mx-auto border rounded-xl shadow-md overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{meal.strMeal}</h2>
          <p className="mt-2 font-semibold">Ingredienser:</p>
          <ul className="list-disc pl-5">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`]
              const measure = meal[`strMeasure${i + 1}`]
              return (
                ingredient &&
                ingredient.trim() !== '' && (
                  <li key={i}>
                    {measure} {ingredient}
                  </li>
                )
              )
            })}
          </ul>

          <p className="mt-4 font-semibold">Fremgangsmåte:</p>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailPage
