"use client"

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/AviationMobile.png"
import { ArrowBack, ArrowForward, TableRows } from "@mui/icons-material";
import { useState } from "react";
import { handleAircraftReport, handleMainMenu, handleMechanicalProblem, handleSchedule, handleStartFlight } from "../routes";
import { useRouter } from "next/navigation";
import { CalendarIcon, DateCalendar } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function Navbar({ navbarName }) {
    const [anchor1, setAnchor1] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(dayjs(Date.now()));

    const router = useRouter();

    const handleCalendar = () => {
        setOpen(!open)
    }

    const handleMenu = (event) => {
        setAnchor1(event.currentTarget);
      };
    
    const handleClosing = () => {
        setAnchor1(null);
    };

    const handleCalendarOpen = (event) => {
        setAnchor2(event.currentTarget);
    };

    const handleCalendarClose = () => {
        setAnchor2(null);
    };

    const handlePrevDay = () => {
        setValue(prev => prev.subtract(1, 'day'));
    };

    const handleNextDay = () => {
        setValue(prev => prev.add(1, 'day'));
    };

    return (
        <AppBar position="static">
            <Toolbar 
                sx={{
                    backgroundColor: "#FFFFC5",
                    height: "130px",
                    color: "darkblue",
                    display: "flex",
                    justifyContent: "space-between",
                    border: "2px solid black"
                }}
                bo
            >
                <Image 
                    src={Logo}
                    height={100}
                    width={130}
                    alt=""
                />
                <Box
                    display={'flex'}
                    flexDirection={"column"}
                    marginRight={"auto"}
                    marginLeft={8}
                    marginTop={-5}
                    gap={1}
                >
                    <Typography variant="h6" sx={{ marginBottom: "-12px" }}>
                        The Flight School, INC
                    </Typography>
                    <Typography variant="p">
                        Gwinnett County Airport
                    </Typography>
                </Box>
                <Typography display={""} variant="h3" marginRight={"auto"}
                marginLeft={-25} marginTop={5}>
                    {navbarName}
                </Typography>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    marginBottom={"auto"}
                    marginTop={"10px"}
                    width={"240px"}
                    alignItems={"center"}
                >
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            backgroundColor: 'gold',
                            '&:hover': {
                                backgroundColor: '#FFD54F',
                            },
                            width: "120px",
                            border: "2px solid black"
                        }}
                        onClick={handleMenu}
                    >
                        <TableRows sx={{ color: "black" }} />
                        <Typography variant="h6" color={"black"} marginLeft={1}>Menu</Typography>
                    </Button> 
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bgcolor={"#6082B6"}
                        height={"40px"}
                        width={"240px"}
                        color={"white"}
                        marginTop={"25px"}
                        border={"2px solid black"}
                        borderRadius={"10px 10px 10px 10px"}
                    >
                        <IconButton onClick={handlePrevDay}>
                            <ArrowBack sx={{ color: "white"}}/>
                        </IconButton>

                        <Typography sx={{ color: "white" }}>
                            {value.format('MMM D, YYYY')}
                        </Typography>

                        <IconButton onClick={handleNextDay}>
                            <ArrowForward sx={{ color: "white"}}/>
                        </IconButton>

                        <IconButton onClick={handleCalendarOpen}>
                            <CalendarIcon sx={{ color: "white"}}/>
                        </IconButton>
                    </Box>
                    <Menu
                        anchorEl={anchor2}
                        open={Boolean(anchor2)}
                        onClose={handleCalendarClose}
                        sx={{
                            "& .MuiPaper-root": {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "20px",
                                width: 300,
                                height: 300,
                                backgroundColor: "#6082B6",
                                borderRadius: "10px",
                                border: "2px solid black",
                                overflow: "hidden",
                            },
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                <DemoItem>
                                    <DateCalendar
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                        sx={{ 
                                            width: '100%', 
                                            height: '100%',
                                            color: "white"
                                        }}    
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Menu>
                </Box>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchor1}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchor1)}
                    onClose={handleClosing}
                    sx={{
                        "& .MuiPaper-root": {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                >
                    <MenuItem onClick={() => handleMainMenu(router)}>Main Menu</MenuItem>
                    <MenuItem onClick={() => handleStartFlight(router)}>Start Flight</MenuItem>
                    <MenuItem onClick={() => handleSchedule(router)}>Schedule</MenuItem>
                    <MenuItem onClick={() => handleAircraftReport(router)}>Aircraft Report</MenuItem>
                    <MenuItem onClick={() => handleMechanicalProblem(router)}>Mechanical Problem</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}