import { useState } from 'react'
import BattingAverage from './BattingAverage'
import GameLog from './GameLog'
import OBP from './OBP'
import SLG from './SLG'
import OPS from './OPS'

const StatsForm = () => {
  const [atBats, setAtBats] = useState(0)
  const [singles, setSingles] = useState(0)
  const [doubles, setDoubles] = useState(0)
  const [triples, setTriples] = useState(0)
  const [homeruns, setHomeruns] = useState(0)
  const [walks, setWalks] = useState(0)

  const stats = [
    { id: 1, label: 'At Bats', value: atBats, function: setAtBats },
    { id: 2, label: '1B', value: singles, function: setSingles },
    { id: 3, label: '2B', value: doubles, function: setDoubles },
    { id: 4, label: '3B', value: triples, function: setTriples },
    { id: 5, label: 'Homeruns', value: homeruns, function: setHomeruns },
    { id: 6, label: 'BB', value: walks, function: setWalks },
  ]

  const handleUpload = e => {
    e.preventDefault()
    console.log('Clicked')
  }

  return (
    <div className="border-2 p-3">
      <p>Stats form</p>
      <div className="flex gap-3">
        <BattingAverage />
        <OBP />
        <SLG />
        <OPS />
        <GameLog />
      </div>
      <div className="border-2 border-primary p-3">
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
          <button className="btn btn-secondary" onClick={handleUpload}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default StatsForm
