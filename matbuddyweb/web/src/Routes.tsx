import { Router, Route } from '@redwoodjs/router'
import HjemPage from 'src/pages/HjemPage/HjemPage'
import LoginPage from 'src/LoginPage'
import RecipeDetailPage from 'src/pages/RecipeDetailPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/hjem" page={HjemPage} name="hjem" />
      <Route path="/recipe/{id}" page={RecipeDetailPage} name="recipeDetail" />
      <Route path="/" page={LoginPage} name="home" />
    </Router>
  )
}

export default Routes
