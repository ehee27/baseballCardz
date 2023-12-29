import { Link } from 'react-router-dom'
import desktop from '../assets/desktop.jpeg'
import mobile from '../assets/mobile.jpeg'
import statTraker from '../assets/statTracker.jpeg'

const Homescreen = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-inner shadow-gray-300 m-3 p-10 rounded-lg min-h-[90%]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl text-black mb-5">Welcome to The SHO</p>
        <p className="my-2">
          To get recruited to play college baseball, high school
          student-athletes must put in a lot of hard work to keep up their
          grades and continue to improve their game. But that is only the
          beginning of the recruiting process. Many student-athletes believe,
          “If I’m good enough, coaches will find me, and I’ll get recruited.”
          The reality is that student-athletes need to be just as engaged with
          their college baseball recruiting process as they are dedicated to
          mastering their skills on the field.
        </p>
        <p className="my-2">
          Our goal is to help young prospects get more exposure and connect with
          college coaches and scouts.
        </p>
        <p className="my-2">
          Our App is designed to maximize the exposure of our players by
          providing players the platform to showcase their abilities to the top
          schools across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-2 rounded-lg p-3 my-6">
        <div className="mx-2">
          <button className="btn btn-accent btn-wide btn-lg text-white text-2xl my-3 shadow-md shadow-gray-400">
            <Link className="text-white hover:text-white" to="/players">
              PLAYERS
            </Link>
          </button>
        </div>
        <div className="mx-2">
          <button className="btn btn-accent btn-wide btn-lg text-white text-2xl my-3 shadow-md shadow-gray-400">
            <Link className="text-white hover:text-white" to="/coaches">
              COACHES
            </Link>
          </button>
        </div>
      </div>
      <div className="border-2 p-10 bg-black shadow-md shadow-gray-300 rounded-lg w-[93%]">
        <div className="flex justify-center">
          <p className="text-2xl text-white">Upload your media and stats</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
          <div className="flex justify-center">
            <img
              className="w-[75%] h-[80%] shadow-lg shadow-gray-500"
              src={desktop}
            ></img>
          </div>
          <div className="flex justify-center mt-4 gap-8">
            <img
              className="w-[30%] h-[75%] shadow-lg shadow-gray-500 rounded-2xl"
              src={mobile}
            ></img>
            <img
              className="w-[30%] h-[75%] shadow-lg shadow-gray-500 rounded-2xl"
              src={statTraker}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homescreen
