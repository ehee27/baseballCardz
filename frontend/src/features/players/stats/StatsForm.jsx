import { useState, useContext } from 'react'
import { GamesContext } from '../../../context/GamesState'

const StatsForm = ({ openStatsForm, onClose }) => {
  const [atBats, setAtBats] = useState(0)
  const [singles, setSingles] = useState(0)
  const [doubles, setDoubles] = useState(0)
  const [triples, setTriples] = useState(0)
  const [homeruns, setHomeruns] = useState(0)
  const [walks, setWalks] = useState(0)
  //
  const { addGameStats } = useContext(GamesContext)

  const formStats = [
    { id: 1, label: 'At Bats', value: atBats, function: setAtBats },
    { id: 2, label: '1B', value: singles, function: setSingles },
    { id: 3, label: '2B', value: doubles, function: setDoubles },
    { id: 4, label: '3B', value: triples, function: setTriples },
    { id: 5, label: 'Homeruns', value: homeruns, function: setHomeruns },
    { id: 6, label: 'BB', value: walks, function: setWalks },
  ]

  const handleSubmit = e => {
    e.preventDefault()
    //
    const gameStats = {
      id: Math.random().toFixed(5).slice(2),
      atBats,
      singles,
      doubles,
      triples,
      homeruns,
      walks,
    }
    setAtBats(0)
    setSingles(0)
    setDoubles(0)
    setTriples(0)
    setHomeruns(0)
    setWalks(0)
    addGameStats(gameStats)
  }

  return (
    <div
      className={`fixed inset-60 flex flex-col justify-center items-center transition-colors ? ${
        openStatsForm
          ? 'visible bg-black/80 text-white rounded-lg shadow-lg shadow-black'
          : 'invisible'
      }`}
    >
      <button
        onClick={onClose}
        className="btn btn-accent text-white absolute top-2 right-2 p-1 rounded-lg hover:bg-gray-50 hover:text-gray-600 w-[100px]"
      >
        Close
      </button>
      <p className="text-3xl my-3">Please input game stats</p>
      <form className="">
        {formStats.map((item, i) => {
          return (
            <div key={i} className="flex flex-col">
              <label>{item.label}</label>
              <input
                className="border-2 p-1 rounded-md text-black"
                type="number"
                value={item.value}
                onChange={e => item.function(parseInt(e.target.value))}
              />
            </div>
          )
        })}
        <button
          className="btn btn-primary text-white w-[200px] my-2"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default StatsForm

{
  /* <div className="p-3 w-1/2">
      <form className="">
        {formStats.map((item, i) => {
          return (
            <div key={i} className="flex flex-col">
              <label>{item.label}</label>
              <input
                className="border-2 p-1 rounded-md text-black"
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
    </div> */
}
