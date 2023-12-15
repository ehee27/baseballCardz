import { useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const BattingAverage = () => {
  const { games } = useContext(GamesContext)
  // console.log('This is the games', games)

  // // AT BATS
  // const atBats = games.reduce((acc, curr) => {
  //   return acc + curr.atBats
  // }, 0)
  // // HITS
  // const hits = games.reduce((acc, curr) => {
  //   return acc + curr.hits
  // }, 0)
  // // DIVIDE AND FORMAT
  // const currentAverage = (hits / atBats).toFixed(3).slice(2)

  return (
    <div className="border-2 p-1">
      <p>Batting Average:</p>
      {/* <span>{currentAverage}</span> */}
    </div>
  )
}

export default BattingAverage

// import { useContext } from 'react'
// import { StatsContext } from '../context/StatsContext'

// const BattingAverage = () => {
//   // destructured the context value
//   const { games } = useContext(StatsContext)

//   const atBats = games.games.reduce((acc, curr) => {
//     return acc + parseInt(curr.atBats)
//   }, 0)

//   const hits = games.games.reduce((acc, curr) => {
//     return (
//       acc +
//       parseInt(curr.singles) +
//       parseInt(curr.doubles) +
//       parseInt(curr.triples) +
//       parseInt(curr.homeruns)
//     )
//   }, 0)

//   const currentAverage = (hits / atBats).toFixed(3).slice(2)

//   return (
//     <div className="bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
//       <h3>Current AVG:</h3>
//       <h2 className="font-bold text-5xl text-orange-400">{currentAverage}</h2>
//     </div>
//   )
// }

// export default BattingAverage
