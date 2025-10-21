import { useEffect, useState } from 'react'
import { Metadata } from '@redwoodjs/web'

const HjemPage = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=pasta'
      )
      const data = await response.json()
      setMeals(data.meals || [])
      setLoading(false)
    }
    fetchMeals()
  }, [])

  if (loading) return <p>Laster oppskrifter...</p>

  return (
    <div className="p-6">
      <Metadata title="Hjem" description="Hjem page" />

      <h1 className="text-2xl font-bold text-center">MatBuddy</h1>
      <h2 className="text-lg text-center mb-4">Oppskriftsfeed</h2>

      {/* Recipe cards */}
      <div className="grid gap-4 max-w-md mx-auto">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
              <p className="text-sm">Kategori: {meal.strCategory}</p>
              <p className="text-sm">Opprinnelse: {meal.strArea}</p>
              <button className="bg-orange-500 text-white mt-2 px-4 py-2 rounded-lg">
                Se Oppskrift
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HjemPage
