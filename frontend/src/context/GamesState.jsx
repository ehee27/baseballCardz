// 1.INITIALIZE Context 2.INITIALIZE Provider 3.wrap CHILDREN to PROVIDE value

// This component needs to...
// 1. Render current state/initialState
// 2. Add games to state via form and save in localStorage

// On mount we'll have useEffect SET local storage with 'games' state. THEN always be listening (dependency array) to reset the games when updated.

// Anytime game added, SPREAD the 'previous' games with new game, SAVE to LS
// -----------------------------------------------------------------------------

import { createContext, useEffect, useState } from 'react'

const initialState = {
  games: [],
}

// sets games from LS or initialState
const getInitialState = () => {
  const games = localStorage.getItem('games')
  return games ? JSON.parse(games) : initialState
}

// CONTEXT OBJECT ----------------------------------
export const GamesContext = createContext()
// PROVIDER
export const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState(getInitialState)

  // useEffect inside the Provider so anytime provider is invoked it triggers
  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games))
    console.log('This is the games state', games)
  }, [games])

  // ADD ACTION
  const addGameStats = gameStats => {
    setGames(prev => ({
      ...prev,
      games: [...prev.games, gameStats],
    }))
  }

  return (
    <GamesContext.Provider value={{ addGameStats, games }}>
      {children}
    </GamesContext.Provider>
  )
}
