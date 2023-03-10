import React from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3}>
        <Grid container>
          <Grid
            xs={6}
            sx={{
              py: 5,
              px: 2,
              background:
                "linear-gradient(hsl(252, 100%, 67%) 25%, hsl(241, 81%, 54%) 50%)",
              borderRadius: 4,
            }}
          >
            <Container
              sx={{
                textAlign: "center",
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "hsl(241, 100%, 89%)",
                  }}
                >
                  Your Result
                </Typography>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "50%",
                    background:
                      "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
                    width: "60%",
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h2"
                    component="strong"
                    sx={{
                      color: "hsl(0, 0%, 100%)",
                    }}
                  >
                    76
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      color: "hsl(241, 100%, 85%)",
                    }}
                  >
                    of 100
                  </Typography>
                </Paper>
                <Typography
                  variant="h4"
                  component="strong"
                  sx={{
                    color: "hsl(0, 0%, 100%)",
                  }}
                >
                  Great
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    color: "hsl(241, 100%, 88%)",
                  }}
                >
                  You scored higher than 65% of the people who have taken these
                  tests.
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid
            xs={6}
            sx={{
              py: 5,
              px: 4,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: "hsl(224, 30%, 27%)",
              }}
            >
              Summary
            </Typography>
            <Stack
              spacing={1}
              sx={{
                py: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 2,
                  backgroundColor: "hsl(0, 100%, 90%)",
                  borderRadius: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#F55"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                  />
                </svg>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  Reaction
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  80
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  100
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 2,
                  backgroundColor: "hsl(0, 100%, 90%)",
                  borderRadius: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                  />
                </svg>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  Reaction
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  80
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  100
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 2,
                  backgroundColor: "hsl(0, 100%, 90%)",
                  borderRadius: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#00BB8F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                  />
                </svg>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  Reaction
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  80
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  100
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 2,
                  backgroundColor: "hsl(0, 100%, 90%)",
                  borderRadius: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                  />
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                  />
                </svg>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  Reaction
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  80
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="strong"
                  sx={{
                    color: "hsl(0, 100%, 67%)",
                  }}
                >
                  100
                </Typography>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{
                width: 1,
                borderRadius: 4,
                backgroundColor: "hsl(224, 30%, 27%)",
                mt: 2,
              }}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default App;
