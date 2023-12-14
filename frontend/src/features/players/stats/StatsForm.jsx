import { useState, useContext } from 'react'
import BattingAverage from './BattingAverage'
import GameLog from './GameLog'
// import OBP from './OBP'
// import SLG from './SLG'
// import OPS from './OPS'
//------------------------
import { GlobalContext } from '../../../context/GlobalState'
//------------------------

const StatsForm = () => {
  const [atBats, setAtBats] = useState(0)
  const [hits, setHits] = useState(0)
  // const [singles, setSingles] = useState(0)
  // const [doubles, setDoubles] = useState(0)
  // const [triples, setTriples] = useState(0)
  // const [homeruns, setHomeruns] = useState(0)
  // const [walks, setWalks] = useState(0)
  //
  const { addGameStats } = useContext(GlobalContext)

  const stats = [
    { id: 1, label: 'At Bats', value: atBats, function: setAtBats },
    { id: 2, label: '1B', value: hits, function: setHits },
    // { id: 3, label: '2B', value: doubles, function: setDoubles },
    // { id: 4, label: '3B', value: triples, function: setTriples },
    // { id: 5, label: 'Homeruns', value: homeruns, function: setHomeruns },
    // { id: 6, label: 'BB', value: walks, function: setWalks },
  ]

  const handleSubmit = e => {
    e.preventDefault()
    //
    const gameStats = {
      id: Math.random().toFixed(5).slice(2),
      atBats: atBats,
      hits: hits,
    }
    console.log('These are game stats', gameStats)
    addGameStats(gameStats)
  }

  return (
    <div className="border-2 p-3">
      <p>Stats form</p>
      <div className="flex flex-col gap-3">
        <BattingAverage />
        {/* <OBP />
        <SLG />
        <OPS /> */}
        <GameLog />
      </div>
      <div className="border-2 border-primary p-1">
        {' '}
        <form className="w-[50%]">
          {stats.map((item, i) => {
            return (
              <div key={i} className="flex flex-col">
                <label>{item.label}</label>
                <input
                  className="border-2 p-1 rounded-md"
                  type="number"
                  value={item.value}
                  onChange={e => item.function(parseInt(e.target.value))}
                />
              </div>
            )
          })}
          <button className="btn btn-secondary" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default StatsForm
