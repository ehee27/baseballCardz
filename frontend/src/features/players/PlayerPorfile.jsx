import { useState } from 'react'
import Modal1 from './Modal1'

const PlayerPorfile = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col p-1">
      <Modal1 open={open} setOpen={setOpen} onClose={() => setOpen(false)} />
    </div>
  )
}

export default PlayerPorfile
