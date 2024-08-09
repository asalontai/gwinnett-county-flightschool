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
    const [anchorE1, setAnchorE1] = useState(null);
    const [calendarE1, setCalendarE1] = useState(null);
    const [value, setValue] = useState(dayjs(Date.now()));

    const router = useRouter();

    const handleMenu = (event) => {
        setAnchorE1(event.currentTarget);
      };
    
    const handleClosing = () => {
        setAnchorE1(null);
    };

    const handleCalendarOpen = (event) => {
        setCalendarE1(event.currentTarget);
    };

    const handleCalendarClose = () => {
        setCalendarE1(null);
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
                        marginTop={"20px"}
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
                        anchorEl={calendarE1}
                        open={Boolean(calendarE1)}
                        onClose={handleCalendarClose}
                        sx={{
                            "& .MuiPaper-root": {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "20px",
                                width: 300,
                                height: 300,
                                backgroundColor: "#white",
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
                                            color: "black"
                                        }}    
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Menu>
                </Box>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorE1}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorE1)}
                    onClose={handleClosing}
                    sx={{
                        "& .MuiPaper-root": {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            border: "2px solid black",
                            overflow: "hidden",
                            color: "black",
                            height: "190px"
                        },
                    }}
                >
                    <MenuItem onClick={() => handleMainMenu(router)} sx={{ borderBottom: "1px solid black"}}>Main Menu</MenuItem>
                    <MenuItem onClick={() => handleStartFlight(router)} sx={{ borderBottom: "1px solid black"}}>Start Flight</MenuItem>
                    <MenuItem onClick={() => handleSchedule(router)} sx={{ borderBottom: "1px solid black"}}>Schedule</MenuItem>
                    <MenuItem onClick={() => handleAircraftReport(router)} sx={{ borderBottom: "1px solid black"}}>Aircraft Report</MenuItem>
                    <MenuItem onClick={() => handleMechanicalProblem(router)}>Mechanical Problem</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}