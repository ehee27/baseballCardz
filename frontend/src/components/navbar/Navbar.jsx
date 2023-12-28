import './navbar.css'
import logo from '../../assets/baseballLogo.png'
import { Link } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaUserLarge } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useLogoutMutation } from '../../features/players/playersApiSlice'

const Navbar = ({ playerInfo }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <div className="navbar bg-black shadow-md shadow-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="text-white text-xl hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-xl hover:text-white"
                to="/register"
              >
                Register
              </Link>
            </li>
            <li>
              <Link className="text-white text-xl hover:text-white" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <img src={logo} className="h-10 w-10"></img>
        <p className="text-xl text-white">SHOTIME</p>
      </div>
      <div className="navbar-end">
        {playerInfo ? (
          <div className="flex gap-4 mr-4">
            <Link to="/profile">
              <FaUserLarge className="text-white text-xl" />
            </Link>
            <HiOutlineLogout
              className="text-white hover:cursor-pointer text-xl"
              onClick={handleLogout}
            />
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  )
}

export default Navbar
