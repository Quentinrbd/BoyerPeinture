import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <>
      <div className="contact">
                <h1>Contactez-nous</h1>

                  <Link  ink to="/contact" className="btn-contact">Faites une demande gratuite de devis !</Link>
                                  
                  <div className="coordonnees">
                      <p><FontAwesomeIcon icon={faPhone} size="lg"/> 06.79.31.83.00</p>
                      <p><FontAwesomeIcon icon={faEnvelope} size="lg"/> manuboyer@laposte.net</p>
                      <p><FontAwesomeIcon icon={faLocationDot} size="lg"/> 7 rue des pommiers, 86000 Poitiers</p>
                  </div>
                    
                <div className="copyright">
                  <p id="copyright">©2024. Tous droits réservés Boyer Peinture - 
                  <Link to="/mentions" style={{color:"#19A7CE", fontSize:"13px"}}> Mentions légales </Link> -
                   Création du site par <a href="https://quentin-ribardiere.com/" target="_blank" style={{color:"#19A7CE"}}> Quentin Ribardière - développement web.</a></p>
                </div>
            </div>
    </>
  )
}