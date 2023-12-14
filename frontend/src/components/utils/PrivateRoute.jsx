import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateROute = () => {
  const { playerInfo } = useSelector(state => state.auth)
  return playerInfo ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateROute
