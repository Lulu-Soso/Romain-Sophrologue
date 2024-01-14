import { Price } from "../../types/Price";
import slide_image_1 from "../../assets/img/img_1.jpg";
import slide_image_2 from "../../assets/img/img_2.jpg";
import slide_image_3 from "../../assets/img/img_3.jpg";
import slide_image_4 from "../../assets/img/img_4.jpg";
import slide_image_5 from "../../assets/img/img_5.jpg";

export const pricesData: Array<Price> = [
  {
    image: slide_image_1,
    title: "Sophrologie",
    description: "Description de la carte 1.",
    price: "60 €",
    details: ["- 30 min de séance de sophrologie", "- 30 min d'échange"],
    offer: "Offre 5 séances: 240 €",
  },
  {
    image: slide_image_2,
    title: "Massage sonore vibratoire aux bols tibétains",
    description: "Description de la carte 2.",
    price: "60 €",
    details: ["- Détail 1", "- Détail 2", "- Détail 3"],
    offer: "Offre 5 séances: 240 €",
  },
  {
    image: slide_image_3,
    title: "Massage harmonisant",
    description: "Description de la carte 1.",
    price: "60 €",
    details: ["- Détail 1", "- Détail 2", "- Détail 3"],
    offer: "Offre 5 séances: 240 €",
  },
  {
    image: slide_image_4,
    title: "Massage Amma assis",
    description: "Description de la carte 4.",
    price: "60 €",
    details: ["- Détail 1", "- Détail 2", "- Détail 3"],
    offer: "Offre 5 séances: 240 €",
  },
  {
    image: slide_image_5,
    title: "Titre de la carte 5",
    description: "Description de la carte 5.",
    price: "60 €",
    details: ["- Détail 1", "- Détail 2", "- Détail 3"],
    offer: "Offre 5 séances: 240 €",
  }
];

export default pricesData;
