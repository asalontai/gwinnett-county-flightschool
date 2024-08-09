"use client"

import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Display from "./Display";
import Stats from "./Stats";
import Account from "./Account";
import Pilot from "../../public/pilot.jpg"

export default function StartFlight() {
    const [open, setOpen] = useState(false);

    const handleSideBar = () => {
        setOpen(!open);
    };
    

    return (
        <Box>
            <Navbar navbarName={"Plane Check Out"} />
            <Box 
                display={"flex"}
            >
                <Sidebar open={open} handleSideBar={handleSideBar} />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        display={"flex"}
                    >
                        <Display open={open} />
                        <Account profilePicture={Pilot} name={"Andy Pars"} position={"Senior Flight Instructor"} />
                    </Box>
                    <Stats open={open} />
                </Box>
            </Box>
        </Box>
    )
}