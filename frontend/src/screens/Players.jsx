import StatsTracker from '../components/STButton'
import { PiIdentificationBadgeBold } from 'react-icons/pi'
import { PiBaseballCapBold } from 'react-icons/pi'
import { PiChatsBold } from 'react-icons/pi'

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
    details:
      'Upload a primary profile pic as well as game/showcase action. Use StatsTRAKER to upload game data so coaches can follow you this season.',
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
    <div className="flex flex-col border-2 p-5 w-11/12">
      <p className="text-3xl font-bold text-accent">PLAYERS</p>
      <p className="shadow p-3">
        To get recruited to play college baseball, high school student-athletes
        must put in a lot of hard work to keep up their grades and continue to
        improve their game. But that is only the beginning of the recruiting
        process. Many student-athletes believe, “If I’m good enough, coaches
        will find me, and I’ll get recruited.” The reality is that
        student-athletes need to be just as engaged with their college baseball
        recruiting process as they are dedicated to mastering their skills on
        the field.
      </p>

      <div className="flex flex-col border-2 rounded-lg p-5">
        {howItWorks.map((item, i) => {
          return (
            <>
              <p className="text-2xl">STEP {item.id}.</p>
              <div key={i} className="shadow-md flex my-2 text-neutral">
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
            </>
          )
        })}

        <div className="flex">
          <StatsTracker />
        </div>
      </div>
    </div>
  )
}

export default Players
