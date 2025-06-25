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

      const categories = [
    "voir tout",
    "interieur",
    "exterieur",
    "escalier",
    "boiserie",
    "sol"
  ];   

    const interieur = ReaData.filter((reaInterieur) => reaInterieur.categorie === 'interieur')
    const boiserie = ReaData.filter((reaBoiserie) => reaBoiserie.categorie === 'boiserie')
    const escalier = ReaData.filter((reaEscalier) => reaEscalier.categorie === 'escalier')
    const sol = ReaData.filter((reaSol) => reaSol.categorie === 'sol')
    const exterieur = ReaData.filter((reaExterieur) => reaExterieur.categorie === 'exterieur')

    const [activeCategory, setActiveCategory] = useState("voir tout")

    const filteredPhotos =
    activeCategory === "voir tout" ? ReaData : ReaData.filter((photo) => photo.categorie === activeCategory) 


    scrollTop(0,0)    
  return (
    <>
        <HeaderRealisation />    

        <h1 id="h1-rea">Nos réalisations</h1>

          {/* <div className="category">
            <ul>
              <li>Voir tout</li>
              <li>Intérieur</li>
              <li>Extérieur</li>
              <li>Escalier</li>
              <li>Boiserie</li>
              <li>Sol</li>
            </ul>
          </div> */}

           <div className="category">
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "active" : ""}
              style={{ cursor: "pointer" }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}

              {console.log("activeCategory:", activeCategory)}
              {console.log("filteredPhotos:", filteredPhotos)}
            </li>
          ))}
        </ul>
      </div>

        {/* <div className={modal ? 'modal open' : 'modal'}>
          <img src={tempImgSrc} alt="" />
          <span onClick={() => setModal(false)}>&times;</span>
        </div> */}

         <div className="gallery">
        {filteredPhotos.map((photo,index) => (
          <motion.div
           whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3},
                }}
                key={index} onClick={() => getIMG(rea.imgSrc)}>
            <img
              key={photo.id}
              src={photo.imgSrc}
              alt={photo.alt}
              className="photo"
            />
          </motion.div>
        ))}
      </div>

        {/* <div className="interieur-rea">
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
        </div> */}
        <Footer/>
    </>
  )
}   