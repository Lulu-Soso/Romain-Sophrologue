import { Box } from "@mui/material";
import React, { MutableRefObject, RefObject } from "react";
import { sectionItems } from "../../helpers/sectionItems";
import SectionItem from "./SectionItem";

interface SectionsProps {
  refs: MutableRefObject<RefObject<HTMLDivElement>[]>;
}

const Sections = ({ refs }: SectionsProps) => {
  return (
    <Box>
      {sectionItems.map((section, index) => (
        <SectionItem
          key={section.title}
          item={section}
          index={index}
          ref={refs.current[index]}
        />
      ))}
    </Box>
  );
};

export default Sections;
