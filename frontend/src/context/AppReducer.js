export default (state, action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return {
        games: [action.payload, ...state.games],
      }
    default:
      return state
  }
}
