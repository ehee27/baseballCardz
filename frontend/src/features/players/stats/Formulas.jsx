import { useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const OBPSlug = () => {
  const { games } = useContext(StatsContext)

  //------- AT BATS ----------------------------------------------
  const atBats = games.games.reduce((acc, curr) => {
    return acc + parseInt(curr.atBats)
  }, 0)

  //------- HITS ----------------------------------------------
  const hits = games.games.reduce((acc, curr) => {
    return (
      acc +
      parseInt(curr.singles) +
      parseInt(curr.doubles) +
      parseInt(curr.triples) +
      parseInt(curr.homeruns)
    )
  }, 0)
  //------- WALKS ----------------------------------------------
  const walks = games.games.reduce((acc, curr) => {
    return acc + parseInt(curr.walks)
  }, 0)
  //------- ON BASE % ----------------------------------------------
  const currentOnBase = ((hits + walks) / atBats).toFixed(3).slice(2)
  //------- TOTAL BASES ----------------------------------------------
  const totalBases = games.games.reduce((acc, curr) => {
    return (
      acc +
      curr.singles +
      curr.doubles * 2 +
      curr.triples * 3 +
      curr.homeruns * 4
    )
  }, 0)
  //------- SLUGGING ----------------------------------------------
  const sluggingPercentage = (totalBases / atBats).toFixed(3).slice(2)

  console.log('At bats:', atBats)
  console.log('Hits:', hits)
  console.log('Games:', games)

  return (
    <div className="flex gap-1 bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl w-[100%] shadow-md shadow-gray-400">
        <p>OBP</p>
        <h2 className="font-bold text-3xl text-orange-400">{currentOnBase}</h2>
      </div>
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl w-[100%] shadow-md shadow-gray-400">
        <p>Slug</p>
        <h2 className="font-bold text-3xl text-orange-400">
          {sluggingPercentage}
        </h2>
      </div>
    </div>
  )
}

export default OBPSlug
