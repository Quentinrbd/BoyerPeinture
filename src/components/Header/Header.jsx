import './Header.scss'
import logo from "../../assets/logo.png"
import { useState} from "react"
import {NavLink} from "react-router-dom"

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [grow, setGrow] = useState(false)

  function setGrowed() {
      if (window.scrollY >= 70) {
          setGrow(true)
      }
      else {
          setGrow(false)
      }        
  }

  window.addEventListener("scroll", setGrowed)

  const [mobile, setMobile] = useState(false)
  
  return (
    <nav className={grow ? 'nav grow' : 'nav'}>
        <NavLink to="/"><img src={logo} alt="logo boyer peinture" id='logo' /></NavLink>

        <div>
            <ul id='navbar' className={mobile ? '#navbar active' : '#navbar'}>
                <li>
                    <NavLink to="/">ACCUEIL</NavLink>
                </li>
                <li>
                    <NavLink to="/entreprise">L'ENTREPRISE</NavLink>
                </li>
                <li>
                    <NavLink to="/realisation">NOS RÉALISATIONS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>       
            </ul>
        </div>
        <div id="mobile">
            <div onClick={() => setMobile(true)} className={mobile ?  'hidden': 'visible'}>
                <FontAwesomeIcon icon={faBars} size='2xl' />
            </div>

            <div onClick={() => setMobile(false)} className={mobile ? 'visible' :'hidden'}> 
                <FontAwesomeIcon icon={faTimes} size='2xl'/>
            </div>
        </div>
    </nav>
  )
}