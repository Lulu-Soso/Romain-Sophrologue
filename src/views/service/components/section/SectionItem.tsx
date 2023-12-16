import React from "react";
import { Section } from "../../../../types/Section";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

interface SectionItemProps {
  item: Section;
  index: number;
}

const SectionItem = React.forwardRef<HTMLDivElement, SectionItemProps>(
  ({ item, index }, ref) => {
    return (
      <Box ref={ref}>
        <Stack
          sx={{
            height: "350px",
            backgroundImage: `url(${item.titleBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Container sx={{ height: "100%", pb: 2 }}>
            <Stack
              flexDirection="row"
              alignItems="flex-end"
              sx={{ height: "100%", width: "100%" }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: index % 2 ? "row-reverse" : "row",
                  alignItems: "flex-end",
                  justifyContent: index % 2 ? "end" : "start",
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.1)",
                  py: 2,
                  pb: 3,
                  px: 4,
                  borderRadius: 4,
                  color: "white",
                  textAlign: index % 2 ? "right" : "left",
                }}
              >
                <Box sx={{ mr: index % 2 ? 0 : 2, ml: index % 2 ? 2 : 0 }}>
                  {item.titleIcon}
                </Box>

                <Box>
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography>{item.subtitle}</Typography>
                </Box>
              </Paper>
            </Stack>
          </Container>
        </Stack>

        <Container sx={{ px: 2, py: 4 }}>
          <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {item.definitionTitle}
            </Typography>
            <Typography>{item.definitionDescription}</Typography>
          </Box>

          <Grid
            container
            spacing={8}
            direction={index % 2 ? "row-reverse" : "row"}
            sx={{ pb: 4 }}
          >
            <Grid item xs={6}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {item.benefitsTitle} :
                </Typography>

                {item.benefitsList.map((benef, i) => (
                  <Typography key={i} sx={{ ml: 2 }}>
                    - {benef}
                  </Typography>
                ))}
              </Box>

              {item.otherTitle && item.otherList && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {item.otherTitle} :
                  </Typography>

                  {item.otherList.map((other, i) => (
                    <Typography key={i} sx={{ ml: 2 }}>
                      - {other}
                    </Typography>
                  ))}
                </Box>
              )}
            </Grid>

            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                  borderRadius: 4,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
);

export default SectionItem;
