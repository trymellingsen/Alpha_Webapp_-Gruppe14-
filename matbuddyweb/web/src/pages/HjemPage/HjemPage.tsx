import { useEffect, useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import RecipeCard from 'src/components/RecipeCard/RecipeCard'

const HjemPage = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=pasta'
      )
      const data = await response.json()
      setMeals(data.meals || [])
    }
    fetchMeals()
  }, [])

  return (
    <div className="p-6">
      <Metadata title="Hjem" description="Oppskriftsfeed" />

      <h1 className="text-2xl font-bold text-center">MatBuddy</h1>
      <h2 className="text-lg text-center mb-4">Oppskriftsfeed</h2>

      <div className="grid gap-4 max-w-md mx-auto">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default HjemPage
