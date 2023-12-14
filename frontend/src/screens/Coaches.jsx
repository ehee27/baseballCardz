import ncaa from '../assets/NCAA_logo.png'
import njcaa from '../assets/njcaa.png'

const Coaches = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-white rounded-lg p-5 w-3/4">
      <p className="text-3xl font-bold text-accent">Coaches</p>
      <p className="m-2 text-center">
        {' '}
        Create a membership to search our player database. Exclusive access to
        stats and player profiles. Connect with potential prospects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <img className="w-[200px] h-[200px]" src={ncaa}></img>
        <img className="w-[200px] h-[200px]" src={njcaa}></img>
      </div>
    </div>
  )
}

export default Coaches
