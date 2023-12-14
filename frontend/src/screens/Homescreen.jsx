import { Link } from 'react-router-dom'

const Homescreen = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-inner m-3 p-10">
      <p className="text-4xl mb-5">Welcome to the Clubhouse</p>
      <button className="btn btn-accent btn-wide btn-lg text-white text-2xl my-3">
        <Link className="text-white hover:text-white" to="/players">
          PLAYERS
        </Link>
      </button>
      <button className="btn btn-accent btn-wide btn-lg text-white text-2xl my-3">
        <Link className="text-white hover:text-white" to="/coaches">
          COACHES
        </Link>
      </button>
    </div>
  )
}

export default Homescreen
