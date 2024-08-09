"use client"

import { AccessTime, Build, CalendarMonth, ContentPaste } from "@mui/icons-material";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { handleAircraftReport, handleMechanicalProblem, handleSchedule, handleStartFlight } from "./routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Box 
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        gap={2}
      >
        <Stack
          direction={"column"}
          spacing={2}
        >
          <ButtonBase onClick={() => handleStartFlight(router)}>
            <Box
              display={"flex"}
              flexDirection={"Column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"200px"}
              height={"200px"}
              bgcolor={"#6082B6"}
              borderRadius={5}
              color={"white"}
              gap={1}
            >
              <Typography
                variant="h5"
              >
                Start Flight
              </Typography>
              <AccessTime 
                sx = {{
                  width: "70px",
                  height: "70px"
                }}
              />
            </Box>
          </ButtonBase>
          <ButtonBase onClick={() => handleAircraftReport(router)}>
            <Box
              display={"flex"}
              flexDirection={"Column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"200px"}
              height={"200px"}
              bgcolor={"#00008B"}
              borderRadius={5}
              color={"white"}
              gap={1}
            >
              <Typography
                variant="h5"
              >
                Aircraft Report
              </Typography>
              <ContentPaste 
                sx = {{
                  width: "70px",
                  height: "70px"
                }}
              />
            </Box>
          </ButtonBase>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
        >
          <ButtonBase onClick={() => handleSchedule(router)}>
            <Box
              display={"flex"}
              flexDirection={"Column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"200px"}
              height={"200px"}
              bgcolor={"gold"}
              borderRadius={5}
              color={"white"}
              gap={1}
            >
              <Typography
                variant="h5"
              >
                Schedule
              </Typography>
              <CalendarMonth 
                sx = {{
                  width: "70px",
                  height: "70px"
                }}
              />
            </Box>
          </ButtonBase>
          <ButtonBase onClick={() => handleMechanicalProblem(router)}>

            <Box
              display={"flex"}
              flexDirection={"Column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"200px"}
              height={"200px"}
              bgcolor={"#0047AB"}
              borderRadius={5}
              color={"white"}
              gap={1}
            >
              <Typography
                variant="h5"
                sx={{
                  marginBottom: "-10px"
                }}
              >
                Mechanical
              </Typography>
              <Typography
                variant="h5"
              >
                Problem
              </Typography>
              <Build 
                sx = {{
                  width: "70px",
                  height: "70px"
                }}
              />
            </Box>
          </ButtonBase>
        </Stack>  
      </Box>
    </Box>
  );
}
