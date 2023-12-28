import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/register', label: 'REGISTER' },
  { to: '/login', label: 'LOGIN' },
]

const Menu = ({ displayNav }) => {
  return (
    <>
      {links.map((item, i) => {
        return (
          <button
            className="btn transition ease-in-out delay-25 hover:border-2 hover:border-white mx-1"
            key={i}
          >
            <Link
              className="text-white hover:text-white"
              onClick={displayNav}
              to={item.to}
            >
              {item.label}
            </Link>
          </button>
        )
      })}
    </>
  )
}

export default Menu
