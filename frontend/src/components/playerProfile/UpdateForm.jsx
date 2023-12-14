import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { setCredentials } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateMutation } from '../../features/players/playersApiSlice'
import { useNavigate } from 'react-router-dom'
import Loading from '../utils/Loading'

const UpdateForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // STATE VARIABLES --------------------------------------------------
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bats, setBats] = useState('')
  const [throws, setThrows] = useState('')
  const [highSchool, setHighSchool] = useState('')
  const [AVG, setAVG] = useState('')
  const [OBP, setOBP] = useState('')
  const [SLG, setSLG] = useState('')
  const [OPS, setOPS] = useState('')
  const [bio, setBio] = useState('')

  // INITIALIZE AUTH FROM STATE ---------------------------------------
  const { playerInfo } = useSelector(state => state.auth)

  // INITIALIZE UPDATE MUTATION ---------------------------------------
  const [updateProfile, { isLoading }] = useUpdateMutation()

  // GET PLAYER DATA --------------------------------------------------
  useEffect(() => {
    if (playerInfo) {
      setName(playerInfo.name)
      setEmail(playerInfo.email)
    }
  }, [playerInfo.setName, playerInfo.setEmail, playerInfo.setBio])

  // HANDLE UPDATE SUBMISSIONS ---------------------------------------
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await updateProfile({
        _id: playerInfo._id,
        name,
        email,
        position,
        number,
        bio,
        age,
        height,
        weight,
        bats,
        throws,
        AVG,
        OBP,
        SLG,
        OPS,
        hs: highSchool,
      }).unwrap()
      dispatch(setCredentials({ ...res, password: playerInfo.password }))
      // window.location.reload()
      navigate('/profile')
      toast.success('Profile updated')
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form className="flex flex-col justify-left" onSubmit={handleSubmit}>
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
            value={position}
            onChange={e => setPosition(e.target.value)}
            type="text"
            placeholder="Position"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="text"
            placeholder="Number"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={age}
            onChange={e => setAge(e.target.value)}
            type="text"
            placeholder="Age"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={height}
            onChange={e => setHeight(e.target.value)}
            type="text"
            placeholder="Height"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            type="text"
            placeholder="Weight"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={bats}
            onChange={e => setBats(e.target.value)}
            type="text"
            placeholder="Bats"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={throws}
            onChange={e => setThrows(e.target.value)}
            type="text"
            placeholder="Throws"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={highSchool}
            onChange={e => setHighSchool(e.target.value)}
            type="text"
            placeholder="High School"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={AVG}
            onChange={e => setAVG(e.target.value)}
            type="text"
            placeholder="AVG"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={OBP}
            onChange={e => setOBP(e.target.value)}
            type="text"
            placeholder="OBP"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={SLG}
            onChange={e => setSLG(e.target.value)}
            type="text"
            placeholder="SLG"
          />
          <input
            className="border-2 rounded mb-3 p-2 text-sm"
            value={OPS}
            onChange={e => setOPS(e.target.value)}
            type="text"
            placeholder="OPS"
          />
          <textarea
            className="border-2 rounded mb-3 p-2 text-sm"
            value={bio}
            onChange={e => setBio(e.target.value)}
            type="textarea"
            placeholder="Player Bio"
          />

          <button className="transition ease-in-out delay-100 bg-green-900 hover:scale-105 text-white p-2 rounded w-200 hover:bg-green-500">
            UPDATE
          </button>
        </form>
      )}
    </>
  )
}

export default UpdateForm
