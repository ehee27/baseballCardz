import { useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const BattingAverage = () => {
  const { stats } = useContext(GamesContext)

  // AT BATS
  const atBats = stats.reduce((acc, curr) => {
    return acc + curr.atBats
  }, 0)

  // HITS
  const hits = stats.reduce((acc, curr) => {
    return acc + curr.singles + curr.doubles + curr.triples + curr.homeruns
  }, 0)
  // DIVIDE AND FORMAT
  const currentAverage = (hits / atBats).toFixed(3).slice(2)

  return (
    <div className="flex flex-col justify-center items-center text-xl p-2 text-gray-300">
      <span className="text-gray-400">AVG</span>
      <span className="text-6xl text-primary">{currentAverage}</span>
    </div>
  )
}

export default BattingAverage
