// when we're using a query method from API (useLogoutMutation) don't need 'dispatch'
// for async requests we need to 'dispatch'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '../features/players/playersApiSlice'
import { setCredentials } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/utils/Loading'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [bio, setBio] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()
  const { playerInfo } = useSelector(state => state.auth)

  useEffect(() => {
    if (playerInfo) {
      navigate('/')
    }
  }, [navigate, playerInfo])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!name || !email || !password) {
      toast.error('Please populate all fields')
    }
    try {
      console.log('This is the form data', name, email, password)
      const res = await register({ name, email, password }).unwrap()
      window.location.reload()
      navigate('/')

      dispatch(setCredentials({ ...res }))
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 m-3 pt-10 pb-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <h1 className="text-3xl mb-3">Create an account</h1>

            <form
              className="flex flex-col justify-left"
              onSubmit={handleSubmit}
            >
              <input
                className="border-2 rounded mb-3 p-2 text-sm"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                className="border-2 rounded mb-3 p-2 text-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
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
                REGISTER
              </button>
              <p className="mt-4 text-md">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default Register
