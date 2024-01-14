import {
  RecentActors,
  Roofing,
  Handshake,
  // PersonPin,
  Spa,
} from "@mui/icons-material";

export const PAGES = [
  {
    link: "/home",
    title: "Accueil",
    logo: <Roofing color="inherit" />,
  },
  {
    link: "/services",
    title: "Prestations",
    logo: <Spa color="inherit" />,
  },
  //{
  //  link: "/about",
  //  title: "A propos",
  //  logo: <PersonPin color="inherit" />,
  //},
  {
    link: "/prices",
    title: "Tarifs",
    logo: <Handshake color="inherit" />,
  },
  {
    link: "/contact",
    title: "Contact",
    logo: <RecentActors color="inherit" />,
  },
];
