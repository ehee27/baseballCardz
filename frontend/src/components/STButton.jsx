import { MdOutlineMobileFriendly } from 'react-icons/md'
import { Link } from 'react-router-dom'
import statTraker from '../assets/statTracker.jpeg'

const StatsTracker = () => {
  return (
    <div className="grid gap-8 items-start justify-center my-10">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-green-900 rounded-lg blur"></div>
        <button className="relative bg-black flex items-center gap-3 rounded-lg px-7 py-4 leading-none divide-x divide-white">
          <Link
            className="flex items-center gap-2 text-gray-100 pr-3 text-xl"
            to="/stats-tracker"
          >
            <span className="flex items-center gap-2 text-gray-100 pr-3 text-xl">
              <MdOutlineMobileFriendly />
              StatsTRAKER
            </span>
            <span className="text-primary pl-6 text-xl">
              Coming Soon &rarr;
            </span>
          </Link>
        </button>
      </div>
      {/* <div className="flex justify-center items-center">
        <img
          className="h-[600px] w-[250px] mt-20 shadow-md shadow-gray-500"
          src={statTraker}
        ></img>
      </div> */}
    </div>
  )
}

export default StatsTracker
