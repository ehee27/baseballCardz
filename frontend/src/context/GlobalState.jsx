import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// create state data for the context to use
const initialState = {
  games: [
    { id: 1, atBats: 3, hits: 1 },
    { id: 2, atBats: 3, hits: 0 },
    { id: 3, atBats: 3, hits: 2 },
    { id: 4, atBats: 3, hits: 0 },
    { id: 5, atBats: 3, hits: 1 },
  ],
}

// 1. DEFINE CONTEXT
export const GlobalContext = createContext(initialState)
// 2. INITIALIZE THE PROVIDER
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addGameStats = game => {
    dispatch({
      type: 'ADD_GAME',
      payload: game,
    })
  }

  // 3. SET THE VALUE OBJECT THAT COMPONENTS WILL USE
  return (
    <GlobalContext.Provider value={{ games: state.games, addGameStats }}>
      {children}
    </GlobalContext.Provider>
  )
}
////// PROVIDE THAT SHIT TO APP--------------------
