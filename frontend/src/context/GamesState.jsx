// On mount, useEffect will start the process:
// 1. SET 'games' in localStorage (gets value from getInitialState)
// 2. LISTENS for additional 'games' updates. Spreads any new games into the array

// useEffect sets both games and stats from playerInfo

import { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const initialState = {
  games: [],
}

// checks LS, if 'games' set that, if NOT set intialState
const getInitialState = () => {
  const games = localStorage.getItem('games')
  return games ? JSON.parse(games) : initialState
}

// CONTEXT OBJECT
export const GamesContext = createContext()
// PROVIDER
export const GamesContextProvider = ({ children }) => {
  // PLAYER DATA
  const { playerInfo } = useSelector(state => state.auth)

  // LOCAL STATE variables
  const [games, setGames] = useState(getInitialState)
  const [stats, setStats] = useState([])

  // SET THE DATA ------------------------------------------
  useEffect(() => {
    {
      playerInfo?.stats ? setStats(playerInfo.stats) : ''
    }
    localStorage.setItem('games', JSON.stringify(games))
    console.log('This is the games', games)
  }, [games])

  // ADD ACTION
  const addGameStats = gameStats => {
    setGames(prev => ({
      ...prev,
      games: [...prev.games, gameStats],
    }))
  }

  return (
    <GamesContext.Provider value={{ addGameStats, games, stats }}>
      {children}
    </GamesContext.Provider>
  )
}
