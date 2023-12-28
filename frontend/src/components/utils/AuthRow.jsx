import { useDispatch } from 'react-redux'
// import { useLogoutMutation } from '../../slices/playersApiSlice.js'
import { useLogoutMutation } from '../../features/players/playersApiSlice'
// import { logout } from '../../slices/authSlice'
import { logout } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUserLarge } from 'react-icons/fa6'
import { HiOutlineLogout } from 'react-icons/hi'

const AuthRow = () => {
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
    <div className="flex justify-end py-2 pr-3 gap-2">
      <button
        className="btn btn-sm btn-accent text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400"
        onClick={handleLogout}
      >
        <HiOutlineLogout />
        LOGOUT
      </button>
      <Link to="/profile">
        <button className="btn btn-sm border-2 bg-green-800 border-none text-white transition ease-in-out delay-25 hover:bg-green-500 hover:scale-105 shadow-md shadow-gray-400">
          <FaUserLarge />
          MY PROFILE
        </button>
      </Link>
    </div>
  )
}
export default AuthRow
