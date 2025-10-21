import { Router, Route } from '@redwoodjs/router'
import HjemPage from 'src/pages/HjemPage/HjemPage'
import LoginPage from 'src/LoginPage'

const Routes = () => {
  return (
    <Router>
      {/* Login route */}
      <Route path="/login" page={LoginPage} name="login" />

      {/* hjemmepage route */}
      <Route path="/hjem" page={HjemPage} name="hjem" />

      
      <Route path="/" page={LoginPage} name="home" />
    </Router>
  )
}

export default Routes
