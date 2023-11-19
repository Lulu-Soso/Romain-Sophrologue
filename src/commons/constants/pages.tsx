import {
  RecentActors,
  Roofing,
  Handshake,
  PersonPin,
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
    logo: <Handshake color="inherit" />,
  },
  {
    link: "/about",
    title: "A propos",
    logo: <PersonPin color="inherit" />,
  },
  {
    link: "contact",
    title: "Contact",
    logo: <RecentActors color="inherit" />,
  },
];
