import "./Home.scss";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import pub from '../../../public/boyerpeinture.mp4'

import avisData from "../../data/avisData";

import { motion } from "framer-motion";
import 'animate.css';

export default function Home() {
  return (
    <>
      <Header />

      <div className="home">
        <div className="landing">
          <motion.div
            id="text"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
          >
            <h1>BOYER <br /> PEINTURE</h1>
            <h2>Peintres en bâtiment  <br id="home-br"/>à Poitiers.</h2>
          </motion.div>

          <div className="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>

        <div className="info">
          <h1>Nos services et nos engagements</h1>
          <div className="square">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <section className="interieur">
                <h2>Peinture et rénovation intérieures</h2>
                <FontAwesomeIcon
                  icon={faPaintRoller}
                  size="2xl"
                  id="interieur-logo"
                />{" "}
                <hr />
                <span id="first">Murs</span>
                <span>Plafonds</span>
                <span>Boiseries</span>
                <span>Sols</span>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <section className="exterieur">
                <h2>Peinture et rénovation extérieures</h2>
                <FontAwesomeIcon
                  icon={faHouse}
                  size="2xl"
                  id="exterieur-logo"
                />{" "}
                <hr />
                <span id="first">Façades</span>
                <span>Murs / murets</span>
                <span>Portails / volets</span>
              </section>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <section className="engagement">
                <h2>Engagements de l'entreprise</h2>
                <FontAwesomeIcon
                  icon={faMedal}
                  size="2xl"
                  id="engagement-logo"
                />{" "}
                <hr />
                <span id="first">Devis gratuit</span>
                <span>Conseils personnalisés</span>
                <span>Travail soigné et de qualité</span>
                <span>Disponibilité</span>
                <span>Réactivité</span>
              </section>
            </motion.div>
          </div>
        </div>

        <div className="carousel">

          <h1>Aperçus de quelques chantiers</h1>
          <Slider />
        </div>

        <div className="avis">
          <h1>Avis</h1>

          <div className="cards">
            {avisData.map((avis, index) => {
              return (
                <motion.div
                  className="card"
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className="info-flex">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <p id="name">{avis.name}</p>
                    </motion.div>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        style={{ color: "#FFD43B" }}
                      />{" "}
                      {avis.note}
                    </p>
                  </div>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      size="lg"
                      style={{ color: "grey" }}
                    />{" "}
                    {avis.date}
                  </p>
                  <p>{avis.message}</p>
                  <span>
                    Avis visible sur{" "}
                    <a
                      href="https://www.pagesjaunes.fr/pros/57206249"
                      target="_blank"
                    >
                      Les Pages Jaunes
                    </a>
                    .
                  </span>
                </motion.div>
              );
            })}
          </div>

          <a
            href="https://www.pagesjaunes.fr/contribution/votre-avis/57206249?codeRubrique=30207600&noteGlobale=5"
            id="button-avis"
            target="_blank"
          >
            DONNEZ VOTRE AVIS !
          </a>
        </div>
        <div className="pub">
          <video id="video" controls autoPlay muted>
            <source src={pub}/>
          </video>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
