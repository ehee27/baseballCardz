import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AuthRow from './components/utils/AuthRow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

function App() {
  const { playerInfo } = useSelector(state => state.auth)
  return (
    <>
      <ToastContainer />
      <Navbar />

      {playerInfo ? <AuthRow /> : <span></span>}
      <Outlet />
    </>
  )
}

export default App
