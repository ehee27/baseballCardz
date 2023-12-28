import StatsTracker from '../components/STButton'
import { PiIdentificationBadgeBold } from 'react-icons/pi'
import { PiBaseballCapBold } from 'react-icons/pi'
import { PiChatsBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const howItWorks = [
  {
    id: 1,
    heading: 'Create your player profile',
    details:
      'Create an account to upload your personal bio and your school/club team info. Let coaches know who you are and what kind of player you can be in their program.',
    icon: <PiBaseballCapBold />,
  },
  {
    id: 2,
    heading: 'Customize your media and stats',
    details: `Upload a primary profile pic as well as game/showcase action. Use StatsTRAKER to upload game data so coaches can follow you this season.`,
    icon: <PiIdentificationBadgeBold />,
  },
  {
    id: 3,
    heading: 'Connect with coaches and scouts',
    details:
      'Instantly get notified when a coache requests more info or a connection. You will need to approve them before procedding. You have the option to block any unwanted contacts.',
    icon: <PiChatsBold />,
  },
]

const Players = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-inner shadow-gray-300 m-3 p-10 rounded-lg">
      <p className="text-5xl font-bold text-black">Players</p>

      <div className="flex flex-col justify-center items-center rounded-lg p-5">
        {howItWorks.map((item, i) => {
          return (
            <div key={i} className="my-2 w-[95%]">
              <p className="text-2xl text-black">STEP {item.id}.</p>
              <div className="shadow-md flex my-2 text-neutral">
                <div className="flex items-center text-5xl bg-accent p-5 text-white">
                  <span>{item.icon}</span>
                </div>

                <div className="flex flex-col">
                  <span className="bg-black text-white text-xl px-3 py-1">
                    {item.heading}
                  </span>
                  <span className="text-[12pt] p-3">{item.details}</span>
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex">
          <StatsTracker />
        </div>

        <div className="">
          <button className="btn btn-accent btn-lg w-[100%] text-white text-2xl my-3 shadow-md shadow-gray-400">
            <Link className="text-white hover:text-white" to="/register">
              GET STARTED NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Players
