import ncaa from '../assets/NCAA_logo.png'
import njcaa from '../assets/njcaa.png'

const Coaches = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-inner shadow-gray-300 m-3 p-10 rounded-lg">
      <p className="text-5xl font-bold text-black">Coaches</p>
      <div className="flex flex-col justify-center items-center rounded-lg p-5">
        <p className="m-2 text-center">
          {' '}
          Create a membership to search our player database. Gain exclusive
          access to stats and player profiles. Connect with potential prospects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <img className="w-[200px] h-[200px]" src={ncaa}></img>
        <img className="w-[200px] h-[200px]" src={njcaa}></img>
      </div>
    </div>
  )
}

export default Coaches
