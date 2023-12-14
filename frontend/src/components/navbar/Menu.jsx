import { Link } from 'react-router-dom'

const Menu = ({ displayNav }) => {
  return (
    <>
      <Link
        className="border-2 border-white p-2 rounded-md text-white hover:bg-white transition-all m-1 shadow-lg"
        onClick={displayNav}
        to="/"
      >
        HOME
      </Link>

      <Link
        className="border-2 border-white p-2 rounded-md text-white hover:bg-white transition-all m-1 shadow-lg"
        onClick={displayNav}
        to="/register"
      >
        REGISTER
      </Link>
      <Link
        className="border-2 border-white p-2 rounded-md text-white hover:bg-white transition-all m-1 shadow-lg"
        onClick={displayNav}
        to="/login"
      >
        LOGIN
      </Link>
    </>
  )
}

export default Menu
