import { useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const GameLog = () => {
  const { games } = useContext(GamesContext)
  // console.log('Destructured games from context', games)
  return (
    <div className="border-2 p-2">
      {/* {games.map((item, i) => {
        return (
          <div className="flex gap-2 border-2 border-primary p-1" key={i}>
            <p>Game {i}| </p>
            <span>
              {item.hits} for {item.atBats}
            </span>
          </div>
        )
      })} */}
    </div>
  )
}

export default GameLog
