import { useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const SLG = () => {
  const { stats } = useContext(GamesContext)

  // AT BATS
  const atBats = stats.reduce((acc, curr) => {
    return acc + curr.atBats
  }, 0)

  // TOTAL BASES
  const totalBases = stats.reduce((acc, curr) => {
    return (
      acc +
      curr.singles +
      curr.doubles * 2 +
      curr.triples * 3 +
      curr.homeruns * 4
    )
  }, 0)
  // DIVIDE AND FORMAT
  const currentSLG = (totalBases / atBats).toFixed(3).slice(2)

  return (
    <div className="flex flex-col justify-center items-center text-xl p-2 text-gray-300">
      <span className="text-gray-400">SLG</span>
      <span className="text-6xl text-primary">{currentSLG}</span>
    </div>
  )
}

export default SLG
