import { useDispatch } from 'react-redux'
// import { useLogoutMutation } from '../../slices/playersApiSlice.js'
import { useLogoutMutation } from '../../features/players/playersApiSlice'
// import { logout } from '../../slices/authSlice'
import { logout } from '../../features/auth/authSlice'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

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
    <div className="flex justify-end pt-2 pr-3 gap-2">
      <button
        className="transition ease-in-out delay-50 bg-green-700 hover:scale-105 text-xs text-white p-2 rounded w-200 hover:bg-green-500"
        onClick={handleLogout}
      >
        Logout
      </button>
      <Link to="/profile">
        <button className="transition ease-in-out delay-50 bg-green-700 hover:scale-105 text-xs text-white p-2 rounded w-200 hover:bg-green-500">
          My Account
        </button>
      </Link>
    </div>
  )
}

export default AuthRow

{
  /* <div className="flex justify-end items-center p-1 transition ease-in-out gap-2 hover:text-green-500 cursor-pointer ">
      <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout} />
      <Link to="/profile">
        <FontAwesomeIcon
          icon={faUser}
          className="mt-2 ml-3 mr-5 transition ease-in-out delay-50 hover:scale-125"
        />
      </Link>
    </div> */
}
