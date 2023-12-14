// when we're using a query method from API (useLogoutMutation) don't need 'dispatch'
// for async requests we need to 'dispatch'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/players/playersApiSlice'
import { setCredentials } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/utils/Loading'

const Login = () => {
  // local state form data
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // using dispatch and navigate
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // initialize login, loading status and playerInfo
  const [login, { isLoading }] = useLoginMutation()
  const { playerInfo } = useSelector(state => state.auth)

  // if playerInfo is present no need to login
  useEffect(() => {
    if (playerInfo) {
      navigate('/profile')
    }
  }, [playerInfo, navigate])
  console.log('This is the player info', playerInfo)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please populate all fields')
    }
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      window.location.reload()
      navigate('/')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col justify-center items-center border-2 m-3 pt-10 pb-10">
          <div>
            <h1 className="text-3xl mb-3">Sign In</h1>
            {isLoading && <h1>Loading asshole...</h1>}

            <form
              className="flex flex-col justify-left"
              onSubmit={handleSubmit}
            >
              <input
                className="border-2 rounded mb-3 p-2 text-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                className="border-2 rounded mb-3 p-2 text-sm"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button className="transition ease-in-out delay-100 bg-green-900 hover:scale-105 text-white p-2 rounded w-200 hover:bg-green-500">
                SIGN IN
              </button>
              <p className="mt-4 text-md">
                Need an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
