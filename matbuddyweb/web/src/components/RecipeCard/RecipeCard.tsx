import { Link, routes } from '@redwoodjs/router'

const RecipeCard = ({ meal }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
        <p className="text-sm">Kategori: {meal.strCategory}</p>
        <p className="text-sm">Opprinnelse: {meal.strArea}</p>

        {/* Link to RecipeDetail page */}
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="bg-orange-500 text-white mt-2 px-4 py-2 rounded-lg inline-block"
        >
          Se Oppskrift
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
