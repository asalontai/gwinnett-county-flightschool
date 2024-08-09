"use client"

import { Payment } from "@mui/icons-material";
import { Box, Button, FormControlLabel, Grid, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Stats({ open }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            bgcolor={"white"}
            width={open ? "1420px" : "1675px"}
            height={"491px"}
            border={"2px solid black"}
            marginLeft={1}
            borderRadius={"10px 10px 10px 10px"}
        >
            <Box
                display={"flex"}
                bgcolor={"#0047AB"}
                fullWidth
                height={"50px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                color={"white"}
                borderBottom={"2px solid black"}
                borderRadius={"7px 7px 0 0"}
            >
                <Typography marginLeft={"auto"} marginRight={"auto"}>AIRCRAFT</Typography>
                <Typography marginLeft={"auto"} marginRight={"auto"} >INSTRUCTOR</Typography>
            </Box>
            <Grid container alignItems="center" padding={1} spacing={2}>
                <Grid item xs={1} />
                <Grid item xs={2} marginLeft={9}>
                    <Typography variant="h6" align="center">TACH</Typography>
                </Grid>
                <Grid item xs={3} marginLeft={7}>
                    <Typography variant="h6" align="center">HOBBS</Typography>
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Grid container alignItems="center" padding={1} paddingLeft={2} paddingRight={2} spacing={2} paddingTop={0}>
                <Grid item marginRight={4} marginLeft={2}>
                    <Typography variant="h6">Time In</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Time In (TACH)"
                    />
                </Grid>
                <Grid item xs={3} marginRight={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Time In (HOBBS)"
                    />
                </Grid>
                <Grid item marginRight={2}>
                    <Typography variant="h6">Ground</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Ground"
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" padding={1} paddingLeft={2} paddingRight={2} spacing={2}>
                <Grid item marginRight={2} marginLeft={2}>
                    <Typography variant="h6">Time Out</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Time Out (TACH)"
                    />
                </Grid>
                <Grid item xs={3} marginRight={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Time Out (HOBBS)"
                    />
                </Grid>
                <Grid item marginRight={4}>
                    <Typography variant="h6">Flight</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Flight"
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" padding={1} paddingLeft={2} paddingRight={2} spacing={2} paddingBottom={0}>
                <Grid item marginRight={2} marginLeft={2}>
                    <Typography variant="h6" marginRight={5}>Total</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Total (TACH)"
                    />
                </Grid>
                <Grid item xs={3} marginRight={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Total (HOBBS)"
                    />
                </Grid>
                <Grid item marginRight={5}>
                    <Typography variant="h6">Total</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Total"
                    />
                </Grid>
            </Grid>
            <Box
                bgcolor={"#FFFFC5"}
                width={"710px"}
                height={"65px"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={3}
                display={"flex"}
                border={"2px solid black"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"10px 10px 10px 10px"}
            >
                <Payment sx={{ color: "black", marginRight: "5px" }} />
                <Typography variant="h6">$1,000 Hull Damage Protection @ $2.50 per hour:</Typography>
                <Box
                    bgcolor={"#6082B6"}
                    width={"150px"}
                    height={"50px"}
                    marginLeft={2}
                    border={"2px solid black"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isChecked}
                                onChange={handleChange}
                                name="switchExample"
                                color="primary"
                            />
                        }
                    />
                    <Typography variant="h6" color={"white"} marginLeft={"-15px"} >{isChecked ? "Yes" : "No"}</Typography>
                </Box>
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={4}
                height={"30px"}
            >
                <Typography variant="h6">Signature</Typography>
                <TextField 
                    label="Signature"
                    sx={{
                        marginLeft: "30px",
                        width: "350px"
                    }}
                />
                <Button 
                    variant="contained" 
                    sx={{ 
                        bgcolor: "gold", 
                        color: "black", 
                        marginLeft: "50px", 
                        '&:hover': {
                            backgroundColor: '#FFD54F',
                        },
                        border: "2px solid black"
                    }}
                >
                    Start Flight
                </Button>
            </Box>
        </Box>
    )
}