import HeaderMentions from "../../components/Header/HeaderOther"
import './Mentions.scss'

import { scrollTop } from "../../hooks/scrollTop"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Mentions() {
  scrollTop(0,0)

  return (
    <>
        <HeaderMentions/>

        <div className="mentions">
          <div className="identite">
              <h1>Article 1 - Entité propriétaire du site</h1>
              <p>Dénomination ou raison sociale : BOYER PEINTURE</p>
              <p>Forme juridique : Société par actions simplifiée.</p>
              <p>Immatriculation au RCS de Poitiers : 829 904 002</p>
              <p>SIRET : 82990400200021</p>
              <p> Numéro de TVA intracommunautaire : FR20829904002</p>
              <p>Capital social : 2000€</p>
              <p>Siège social : 7 rue des pommiers, 86000 Poitiers</p>
              <p>Tél : 06.79.31.83.00</p>
              <p>Code APE : 43.34Z - Travaux de peinture et vitrerie</p>
          </div>

          <div className="edition">
              <h1>Article 2 - Edition du site</h1>
              <p>Quentin Ribardière EI</p>
              <p>Forme juridique : Entreprise individuelle</p>
              <p>SIRET : 98329592400010</p> 
              <p> Numéro de TVA intracommunautaire : FR26983295924</p>
              <p>7 route de Marigny, 86380 Ouzilly</p>
              <p>Tél : 06.73.10.61.18</p>
              <p>Code APE : 6201Z - Programmation informatique</p>
          </div>

          <div className="hebergeur">
              <h1>Article 3 - Hébergeur du site</h1>
              <a href="https://www.hostinger.fr/" target="_blank">HOSTINGER INTERNATIONAL LTD</a>
              <p>61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
              <p>Joignable par <a href="https://www.hostinger.fr/contact" target="_blank">ce lien.</a> </p>
          </div>

          <div className="donnees">
            <h1>Article 4 - Données personnelles</h1>
            <p>Dans un souci de transparence et de protection de vos droits, la société <b>BOYER PEINTURE</b> ne se procurera pas d'informations permettant de vous
            identifier personnellement sauf à ce que vous nous les communiquiez volontairement en remplissant le formulaire figurant sur le site.</p>
          </div>

          <div className="propriete">
            <h1>Article 5 - Propriété intellectuelle</h1>
            <p>L’utilisation du site de la société <b>BOYER PEINTURE</b> ne vous confère aucun droit, seul un usage strictement personnel est autorisé. <br />
              Ce site et l’ensemble des éléments le composant tels que notamment les noms de domaine, la structure générale, les textes, graphiques, l’arborescence du site, les logos, la charte graphique, les photographies et l’iconographie et autres éléments reproduits sur le site sont la propriété exclusive de la société <b>BOYER PEINTURE</b>. <br />
              La protection du site et des éléments le composant relève des législations nationales et internationales relatives au droit de la propriété intellectuelle. Dès lors, toute reproduction et/ou représentation et/ou rediffusion, en tout ou en partie, sur tout support électronique ou non, présent ou futur, sont interdites sauf autorisation préalable, écrite et expresse de la société <b>BOYER PEINTURE</b>.
              Toute personne contrevenant à cette interdiction, engage sa responsabilité pénale et civile.</p>
          </div>

          <div className="liens">
            <h1>Article 6 - Liens hypertextes</h1>
            <p>Le site peut contenir des liens hypertexte donnant accès à d’autres sites web édités et gérés par des tiers et non par l’Editeur. L’Editeur ne pourra être tenu responsable directement ou indirectement dans le cas où les dits sites tiers ne respecteraient pas les dispositions légales.</p>
          </div>

          <div className="credit">
            <h1>Crédits</h1>
            <p>Utilisation d'icônes : <a href="https://www.flaticon.com/free-icons/paint-bucket" title="paint-bucket icons">Paint-bucket icons created by justicon - Flaticon</a></p>
          </div>
        </div>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>

    </>
  )
}   