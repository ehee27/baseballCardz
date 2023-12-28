import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AuthRow from './components/utils/AuthRow'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { GamesContextProvider } from './context/GamesState'
import Footer from './components/footer/Footer'

function App() {
  const { playerInfo } = useSelector(state => state.auth)
  return (
    <>
      <GamesContextProvider>
        <ToastContainer />
        <Navbar playerInfo={playerInfo} />

        {/* {playerInfo ? <AuthRow /> : <span></span>} */}
        <Outlet />
        <Footer />
      </GamesContextProvider>
    </>
  )
}

export default App
