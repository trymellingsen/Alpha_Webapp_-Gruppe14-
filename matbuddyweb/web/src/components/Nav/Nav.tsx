import { Link, routes } from '@redwoodjs/router'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <h1 className="font-bold text-xl">🍴 MatBuddy</h1>
      <div className="flex gap-4">
        <Link to={routes.hjem()} className="hover:text-orange-500">Hjem</Link>
        <Link to={routes.login()} className="hover:text-orange-500">Logg ut</Link>
      </div>
    </nav>
  )
}

export default Nav
