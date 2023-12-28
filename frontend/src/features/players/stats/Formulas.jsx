import { useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const OBPSlug = () => {
  const { games } = useContext(StatsContext)

  //------- AT BATS ----------------------------------------------
  const atBats = games.games.reduce((acc, curr) => {
    return acc + parseInt(curr.atBats)
  }, 0)

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
    <div className="flex gap-1 bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1"></div>
  )
}

export default OBPSlug
