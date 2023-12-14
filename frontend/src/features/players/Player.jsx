import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectPlayerById } from './playersApiSlice'

const Player = ({ playerId }) => {
  const navigate = useNavigate()
  const player = useSelector(state => selectPlayerById(state, playerId))

  if (player) {
    const handleEdit = () => navigate('/profile')

    const playerRoles = player.roles.toString().replaceAll(',', ', ')

    // const activeStatus = player.active ?
  } else return null

  return (
    <div>
      <div className="text-xl">{player.name}</div>
      <div className="text-sm">{player.email}</div>
      <div className="text-sm">{player.active}</div>
    </div>
  )
}

export default Player
