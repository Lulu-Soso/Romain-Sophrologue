import { createTheme, responsiveFontSizes } from "@mui/material";

const fontTitle = "Baumans";
const font = "Asap";

let theme = createTheme({
  typography: {
    fontFamily: font,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          fontFamily: fontTitle,
        },
      },
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontFamily: fontTitle,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontFamily: fontTitle,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: fontTitle,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontFamily: fontTitle,
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontFamily: fontTitle,
          },
        },
        {
          props: { variant: "h6" },
          style: {
            fontFamily: fontTitle,
          },
        },
      ],
    },
  },
});

// To use responsive font sizes, include the following line
theme = responsiveFontSizes(theme);

export default theme;

/**let theme = createTheme({
  typography: {
    fontFamily: font,
  },
});**/
