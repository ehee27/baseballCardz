// ternary checks if player's specs are incomplete, if NO, update modal triggered

import { useState } from 'react'
import { useSelector } from 'react-redux'
import dummyPic from '../assets/current.jpg'
// MODALS
import ModalBio from '../features/players/ModalBio'
import ModalProfPic from '../features/players/ModalProfPic'
import Stats from '../features/players/stats/Stats'
import { FaImagePortrait } from 'react-icons/fa6'

const ProfileScreen = () => {
  const [openBio, setOpenBio] = useState(true)
  const [openProfPic, setOpenProfPic] = useState(false)
  const { playerInfo } = useSelector(state => state.auth)

  // we'll map this to render player specs
  const playerSpecs = ['Age', 'Height', 'Weight', 'Bats', 'Throws', 'HS']

  return (
    <>
      {/* TERNARY CHECKS SPECS / modal --------------------------------------- */}
      {playerInfo.bio === '' ? (
        <ModalBio
          openBio={openBio}
          setOpenBio={!openBio}
          onClose={() => setOpenBio(openBio)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-3 shadow-lg bg-gray-100">
          {/* LEFT COL ----------------- */}
          <div className="border-2 rounded-lg flex flex-col justify-center items-center gap-2">
            <img
              className="h-[80%] w-[50%]"
              src={
                playerInfo.profilePic === ''
                  ? dummyPic
                  : `src/assets/${playerInfo.profilePic}`
              }
            ></img>
            <button
              className="btn btn-sm btn-accent text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400"
              onClick={() => setOpenProfPic(!openProfPic)}
            >
              <FaImagePortrait />
              PROFILE PIC
            </button>
            <ModalProfPic
              openProfPic={openProfPic}
              setOpenProfPic={!setOpenProfPic}
              onClose={() => setOpenProfPic(!openProfPic)}
              playerInfo={playerInfo}
            />
          </div>

          {/* RIGHT COL ----------------- */}
          <div className="flex flex-col px-5">
            <div className="">
              {playerInfo && (
                <p className="text-3xl md:text-5xl text-gray-600 py-2 pt-8">
                  <span className="text-black">{playerInfo.name}</span>
                  <span className="text-primary"> | {playerInfo.position}</span>
                </p>
              )}
            </div>
            <div className="">
              {playerSpecs.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex xs:text-xl sm:text-xl md:text-xl mt-2 text-gray-400"
                  >
                    <span className="text-black">{item}</span>:{' '}
                    <span className="text-gray-500 pl-2">
                      {playerInfo[`${item}`.toLowerCase()]}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="text-black mt-10">{playerInfo.bio}</div>
          </div>
        </div>
      )}
      <div className="border-2 p-3">
        <Stats />
      </div>
    </>
  )
}

export default ProfileScreen
