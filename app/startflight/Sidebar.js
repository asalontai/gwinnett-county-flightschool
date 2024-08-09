"use client"

import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import PlaneItem from "./PlaneItem";
import { useState } from "react";

export default function Sidebar({ open, handleSideBar }) {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            width={open ? "300px" : "45px"}
            height={"680px"}
            bgcolor={"#6082B6"}
            marginTop={1}
            marginLeft={1}
            marginBottom={1}
            border={"2px solid black"}
            borderRadius={"10px 10px 10px 10px"}
        >
            <Box
                display={"flex"}
                height={"40px"}
                bgcolor={"gold"}
                color={"darkblue"}
                alignItems={"center"}
                borderBottom={"2px solid black"}
                borderRadius={"8px 8px 0 0"}
            >
                <IconButton sx={{ marginLeft: "-5px", height: "50px", width: "50px", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={handleSideBar} >
                    {open ? <ArrowLeft sx={{ color: "darkblue" }}/> : <ArrowRight sx={{ color: "darkblue" }}/>}
                </IconButton>

                {open && (
                    <Typography marginLeft={"auto"} marginRight={"auto"}>TALL NUMBER (20)</Typography>
                )}
            </Box>
            {open && (
                <Stack
                    direction={"column"}
                    overflow={"auto"}
                >
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                    <PlaneItem />
                </Stack>
            )}
        </Box>
    )
}