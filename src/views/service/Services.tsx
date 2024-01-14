import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Sections from "./components/section/Sections";
import React, {
  RefObject,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { sectionItems } from "./helpers/sectionItems";
import { useParams } from "react-router-dom";

const Services = () => {
  const { serviceId } = useParams();
  const [refs, setRefs] = useState<RefObject<HTMLDivElement>[]>([]);
  const refsArray = useRef<Array<RefObject<HTMLDivElement>>>([]);

  const scrollToSection = (index: number) => {
    const sectionRef = refsArray.current[index];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    refsArray.current = sectionItems.map(() => createRef<HTMLDivElement>());
    setRefs(refsArray.current);
  }, []);

  useEffect(() => {
    if (serviceId && refs.length) {
      const index = Number(serviceId);
      const sectionRef = refs[index];
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [serviceId, refs]);

  return (
    <Box sx={{ position: "relative" }}>
      <Header scrollTo={scrollToSection} />

      <Sections refs={refsArray} />
    </Box>
  );
};

export default Services;
