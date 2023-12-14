import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AuthRow from './components/utils/AuthRow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { GlobalProvider } from './context/GlobalState'

function App() {
  const { playerInfo } = useSelector(state => state.auth)
  return (
    <>
      <GlobalProvider>
        <ToastContainer />
        <Navbar />

        {playerInfo ? <AuthRow /> : <span></span>}
        <Outlet />
      </GlobalProvider>
    </>
  )
}

export default App
