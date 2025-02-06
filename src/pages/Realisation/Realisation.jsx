import "./Realisation.scss"
import HeaderRealisation from "../../components/Header/HeaderOther"
import ReaData from "../../data/reaData"
import Footer from "../../components/Footer/Footer"

import { useState } from "react"
import { easeIn, motion } from "framer-motion";

import { scrollTop } from "../../hooks/scrollTop"

export default function Realisation() {
    const [modal, setModal] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getIMG = (imgSrc) => {
      setTempImgSrc(imgSrc)
      setModal(true)
    }

    const interieur = ReaData.filter((reaInterieur) => reaInterieur.categorie === 'interieur')
    const boiserie = ReaData.filter((reaBoiserie) => reaBoiserie.categorie === 'boiserie')
    const escalier = ReaData.filter((reaEscalier) => reaEscalier.categorie === 'escalier')
    const sol = ReaData.filter((reaSol) => reaSol.categorie === 'sol')
    const exterieur = ReaData.filter((reaExterieur) => reaExterieur.categorie === 'exterieur')

    scrollTop(0,0)    
  return (
    <>
        <HeaderRealisation />

        <h1 id="h1-rea">Nos réalisations</h1>
        <div className={modal ? 'modal open' : 'modal'}>
          <img src={tempImgSrc} alt="" />
          <span onClick={() => setModal(false)}>&times;</span>
        </div>

        <div className="interieur-rea">
          <h2>Peintures intérieures et papiers peints</h2>
          <div className="interieur-content">
          {interieur.map((rea, index) => {
            return (
              <motion.div 
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}> 
                  <img src={rea.imgSrc} alt={rea.alt}/>
                </motion.div>
            )
          })}
          </div>
        </div>

        <div className="boiserie">
          <h2>Boiseries</h2>
          <div className="boiserie-content">
            {boiserie.map((rea, index) => { 
              return (
                <motion.div 
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}> 
                  <img src={rea.imgSrc} alt={rea.alt}/>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="escaliers">
          <h2>Escaliers et peintures de contre-marches</h2>
          <div className="escaliers-content">
            {escalier.map((rea, index) => {
              return (
                <motion.div 
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}> 
                  <img src={rea.imgSrc} alt={rea.alt}/>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="sol">
          <h2>Sols</h2>
          <div className="sol-content">
            {sol.map((rea, index) => {
              return (
                <motion.div 
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}> 
                  <img src={rea.imgSrc} alt={rea.alt}/>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="exterieur-rea">
          <h2>Façades et peintures extérieures</h2>
          <div className="exterieur-content">
            {exterieur.map((rea, index) => {
              return (
                <motion.div 
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.6},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}> 
                  <img src={rea.imgSrc} alt={rea.alt}/>
                </motion.div>
              )
            })}
          </div>
        </div>
        <Footer/>
    </>
  )
}   