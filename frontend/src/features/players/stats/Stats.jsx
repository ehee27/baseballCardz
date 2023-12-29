import BattingAverage from './BattingAverage'
import OBP from './OBP'
import SLG from './SLG'
import OPS from './OPS'
import { useUpdateMutation } from '../playersApiSlice'
import { setCredentials } from '../../auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GamesContext } from '../../../context/GamesState'
import { useContext, useState } from 'react'
import Loading from '../../../components/utils/Loading'
import StatsForm from './StatsForm'

const components = [
  { comp: <BattingAverage /> },
  { comp: <OBP /> },
  { comp: <SLG /> },
  { comp: <OPS /> },
]

const Stats = () => {
  const dispatch = useDispatch()
  const [updateProfile, { isLoading }] = useUpdateMutation()
  const { playerInfo } = useSelector(state => state.auth)
  const { games, stats } = useContext(GamesContext)
  const [openStatsForm, setOpenStatsForm] = useState(false)

  console.log('Players stats', stats)

  const handleSaveStats = async e => {
    e.preventDefault()
    try {
      const res = await updateProfile({
        _id: playerInfo._id,
        stats: [...games.games],
      }).unwrap()
      dispatch(setCredentials({ ...res, password: playerInfo.password }))
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-gray-300 rounded-md p-2">
          <div className="grid grid-cols-1 md:grid-cols-4 p-5 rounded-md gap-4 bg-gradient-to-b from-gray-600 to-black">
            {/* MAP components array ---------------------- */}
            {components.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-lg bg-white shadow-inner shadow-gray-500"
                >
                  {item.comp}
                </div>
              )
            })}
          </div>
          {/* SAVE THE UPLOADED STATS TO DB ----------------- */}
          <div className="flex">
            <div className="">
              <button
                onClick={() => setOpenStatsForm(!openStatsForm)}
                className="btn btn-sm btn-accent text-white w-[200px] my-2 shadow-md shadow-gray-500"
              >
                UPLOAD STATS
              </button>{' '}
              <StatsForm
                openStatsForm={openStatsForm}
                setOpenStatsForm={setOpenStatsForm}
                onClose={() => setOpenStatsForm(!openStatsForm)}
              />
            </div>
            <div className="px-5">
              <button
                onClick={handleSaveStats}
                className="btn btn-sm btn-accent text-white w-[200px] my-2 shadow-md shadow-gray-500"
              >
                SAVE STATS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Stats
