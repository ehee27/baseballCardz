// when we're using a query method from API (useLogoutMutation) don't need 'dispatch'
// for async requests we need to 'dispatch'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import './navbar.css'
import logo from '../../assets/baseballLogo.png'

import Menu from './Menu'
const Navbar = () => {
  const navRef = useRef()

  const displayNav = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header className="bg-primary flex text-white shadow-md shadow-black py-3">
      {/* <div className="flex items-center gap-2"> */}
      <div className="flex justify-center items-center sm:w-6/12 gap-2 font-sans sm:text-2xl md:text-4xl">
        <img src={logo} className="h-10 w-10"></img>
        <p>The Clubhouse</p>
      </div>
      {/* </div> */}
      <div className="flex justify-center items-center sm:w-6/12">
        <nav ref={navRef}>
          <Menu displayNav={displayNav} />
          <FontAwesomeIcon
            icon={faXmark}
            onClick={displayNav}
            className="nav-btn close-nav-btn"
          />
        </nav>
        <FontAwesomeIcon
          icon={faBars}
          onClick={displayNav}
          className="nav-btn"
        />
      </div>
      {/* <div className="flex justify-center items-center w-2/12 border-2 "> */}
      {/* <FontAwesomeIcon
          icon={faBars}
          onClick={displayNav}
          className="nav-btn"
        /> */}
      {/* </div> */}
    </header>
  )
}

export default Navbar
