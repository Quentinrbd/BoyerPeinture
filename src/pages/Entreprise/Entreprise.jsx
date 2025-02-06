import "./Entreprise.scss"
import HeaderEntreprise from "../../components/Header/HeaderOther"
import Footer from "../../components/Footer/Footer"
import Image1 from "../../assets/manu.jpg"
import Image2 from "../../assets/boyer.png"

import {motion} from "framer-motion"

import { scrollTop } from "../../hooks/scrollTop"

export default function Entreprise() {
  scrollTop(0,0)
  return (
    <>
      <HeaderEntreprise/>

      <h1 id="h1-entreprise">En savoir plus sur l'entreprise</h1>

      <div className="entreprise">
        <div className="top">
          <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration: 1.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}>
            <img src={Image1} alt="" id="image1" />
          </motion.div>
          <div className="text">
            <h2 style={{color:'#19A7CE'}}>L'histoire de l'entreprise</h2>
            <p>Fort de nombreuses années d’expérience dans le métier de peintre en bâtiment en tant que salarié, c’est en 2017 qu’Emmanuel Boyer décide de sauter le pas et de créer sa propre société sous forme de SAS. Son objectif était de créer une société à son image, afin de mettre en œuvre son savoir-faire et ses connaissances techniques et d’assurer lui-même une relation de qualité avec les clients. </p>
            <p>Après quelques années, la société BOYER PEINTURE s’est agrandie avec l’arrivée d’une première apprentie aux côtés d’Emmanuel Boyer, devenue aujourd’hui salariée de l’entreprise. 
              Ayant à cœur de participer à la formation de futurs peintres en bâtiment, Emmanuel BOYER a continué de développer la société BOYER PEINTURE en ce sens. C’est ainsi que deux jeunes professionnelles ont intégré l’entreprise par la voie du contrat d’apprentissage, respectivement en juillet 2022 et juillet 2023. </p>
            <p>Implantée à Poitiers, la société BOYER PEINTURE intervient dans plusieurs domaines, notamment dans la peinture intérieure et extérieure, dans la pose de revêtements muraux et rénovation de cuisine (peinture sur meuble), de sols plastiques et parquet et de ravalement de façades.</p>
          </div>
        </div>

        <div className="bot">
          <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration: 1.5, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}>
            <img src={Image2} alt="" id="image2" />
          </motion.div>
          <div className="text">
            <h2 style={{color:'#19A7CE'}}>Le signe distinctif de l’entreprise : les déplacements en triporteur électrique</h2>
            <p>Afin d’accéder plus aisément à ses chantiers en centre-ville, Emmanuel Boyer, artisan aux aspirations écologiques, effectue depuis 2019 ses déplacements professionnels en triporteur électrique.</p>
            <p>En effet, bien avant la « vélorution » déclenchée en 2020 par la crise sanitaire du Covid, Emmanuel Boyer a eu l’idée de privilégier le triporteur à assistance électrique pour ses déplacements professionnels en centre-ville de Poitiers. </p>
            <p>Ancien coureur cycliste amateur, il était logique pour Emmanuel Boyer d’utiliser un vélo plutôt qu’un véhicule motorisé. Il s’agit d’une solution adaptée à la fois pour accéder aux rues étroites du centre-ville, pour transporter le matériel et pour résoudre la question du stationnement difficile. </p>
            <p>Les économies de carburant effectuées grâce à ce mode de locomotion sont également un aspect non négligeable pour les membres de la société BOYER PEINTURE, soucieux de la protection de l’environnement et qui privilégient les peintures « éco label ». </p>
            <p>En partant d’un modèle de triporteur de série, sur les indications d’Emmanuel Boyer, le fournisseur a surélevé la caisse afin de lui permettre de transporter es outils et les matériaux qu’il utilise au quotidien : quelques seaux de peinture, des pinceaux et des rouleaux, un petit escabeau.
              L’avant a été équipé d’une porte et des barres de fixation ont été installées sur le dessus pour permettre d’y attacher un escabeau trois marches. Équipé de deux gros moteurs électriques sur chacune des roues avant, l’engin peut transporter 120 kg et atteindre la vitesse de 30 km/h.
              La société BOYER PEINTURE réserve ses camions aux déplacements hors de Poitiers ou quand l’échafaudage est indispensable.</p>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}