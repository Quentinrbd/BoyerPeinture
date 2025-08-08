import "./Realisation.scss"
import HeaderRealisation from "../../components/Header/HeaderOther"
import ReaData from "../../data/reaData"
import Footer from "../../components/Footer/Footer"

import { useState } from "react"
import { easeIn, motion } from "framer-motion";

import { scrollTop } from "../../hooks/scrollTop"

export default function Realisation() {
    const [selectedImage, setSelectedImage] = useState(null)

    const categories = [
      "voir tout",
      "intérieur",
      "extérieur",
      "boiserie",
      "sol",
      "avant/après"
  ];  

    const [activeCategory, setActiveCategory] = useState("voir tout")
    const filteredPhotos = activeCategory === "voir tout" ? ReaData : ReaData.filter((photo) => photo.categorie === activeCategory) 
    scrollTop(0,0)    

  return (
    <>
        <HeaderRealisation />    

        <h1 id="h1-rea">Nos réalisations</h1>          

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
            </li>
          ))}
        </ul>
      </div>

         <div className="gallery">
        {filteredPhotos.map((photo,index) => (
          <motion.div
           whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3},
                }}
            className="img"
          >
            <img
              key={photo.id}
              src={photo.imgSrc}
              alt={photo.alt}
              className="photo"
              onClick={() => setSelectedImage(photo.imgSrc)}
            />
            {photo.desc && (<p className="desc"> {photo.desc}</p>)}
          </motion.div>
        ))}
        </div>

        {selectedImage && (
          <div className="box" onClick={() => setSelectedImage(null)}>
            <div className="box-content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
              <img src={selectedImage} alt="agrandie" />
            </div>
          </div>
        )}
        <Footer/>
    </>
  )
}   