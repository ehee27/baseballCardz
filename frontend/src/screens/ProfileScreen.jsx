// ternary checks if player's specs are incomplete, if NO, update modal triggered
// profilePic modal triggered with button

import { useState } from 'react'
import { useSelector } from 'react-redux'
import dummyPic from '../assets/current.jpg'
// MODALS
import ModalBio from '../features/players/ModalBio'
import ModalProfPic from '../features/players/ModalProfPic'
import Stats from '../components/Stats'
import StatsForm from '../features/players/stats/StatsForm'

const ProfileScreen = () => {
  const [openBio, setOpenBio] = useState(true)
  const [openProfPic, setOpenProfPic] = useState(false)
  const { playerInfo } = useSelector(state => state.auth)
  console.log('This is player info', playerInfo)

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
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-3 shadow-lg">
          {/* LEFT COL ----------------- */}
          <div className="bg-gray-300 rounded-lg flex flex-col justify-center items-center gap-2">
            <img
              className="h-[80%] w-[50%]"
              src={
                playerInfo.profilePic === ''
                  ? dummyPic
                  : `src/assets/${playerInfo.profilePic}`
              }
            ></img>
            <button
              onClick={() => setOpenProfPic(!openProfPic)}
              className="bg-green-800 text-white w-[30%] h-[10%] rounded-md text-sm"
            >
              Profile Pic
            </button>
            {/* BUTTON TRIGGERS PIC MODAL */}
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
                <p className="text-4xl text-gray-600 py-2">
                  <span className="">{playerInfo.name}</span>
                  <span>| {playerInfo.position}</span>
                </p>
              )}
            </div>
            <div className="">
              {playerSpecs.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex xs:text-xs sm:text-sm md:text-xl mt-2"
                  >
                    {item}: {playerInfo[`${item}`.toLowerCase()]}
                  </div>
                )
              })}
            </div>
            <div className="mt-10">{playerInfo.bio}</div>
          </div>
        </div>
      )}
      <Stats />
      <StatsForm />
    </>
  )
}

export default ProfileScreen
