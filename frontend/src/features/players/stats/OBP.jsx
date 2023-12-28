import { useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const OBP = () => {
  const { stats } = useContext(GamesContext)

  // AT BATS
  const atBats = stats.reduce((acc, curr) => {
    return acc + curr.atBats
  }, 0)

  // REACHED SAFELY
  const reachedBase = stats.reduce((acc, curr) => {
    return (
      acc +
      curr.singles +
      curr.doubles +
      curr.triples +
      curr.homeruns +
      curr.walks
    )
  }, 0)
  // DIVIDE AND FORMAT
  const currentOBP = (reachedBase / atBats).toFixed(3).slice(2)

  return (
    <div className="flex flex-col justify-center items-center text-xl p-2 text-gray-300">
      <span>OBP</span>
      <span className="text-6xl text-primary">{currentOBP}</span>
    </div>
  )
}

export default OBP
