import { navigate } from '@redwoodjs/router'

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    
    navigate('/hjem')  
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🍴 MatBuddy</h1>
        <h2>Logg inn</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="E-post" required />
          <input type="password" placeholder="Passord" required />
          <button type="submit">Logg inn</button>
        </form>
        <p>Har du ikke en konto? <a href="#">Registrer deg</a></p>
      </div>
    </div>
  )
}

export default LoginPage
