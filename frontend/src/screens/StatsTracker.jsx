import statTracker from '../assets/statTracker.jpeg'
import STButton from '../components/STButton'

const StatsTracker = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center border-2 border-white rounded-lg p-5 w-3/4">
        <div className="flex">
          <STButton />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-[600px] w-[250px] mt-20 shadow-md shadow-gray-500"
            src={statTracker}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default StatsTracker
