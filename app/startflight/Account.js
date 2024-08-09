import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Account({ profilePicture, name, position}) {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            width={"312px"}
            height={"180px"}
            bgcolor={"#6082B6"}
            alignItems={"center"}
            marginTop={1}
            marginLeft={1}
            marginBottom={1}
            border={"2px solid black"}
            color={"white"}
            borderRadius={"10px 10px 10px 10px"}
        >
            <Box
                bgcolor={"#990000"}
                marginLeft={"auto"}
                padding={"3px"}
                borderRadius={"0 5px 0 0"}
            >
                <Typography variant="p">2115</Typography>
            </Box>
            <Avatar 
                src={profilePicture.src}
                alt="Pilot Picture"
                sx={{
                    width: "110px",
                    height: "110px",
                    marginTop: "-25px",
                    border: "1px solid white",
                    zIndex: "1"
                }}
            />
            <Typography variant="h6">{ name }</Typography>
            <Typography variant="p">{ position }</Typography>
        </Box>
    )
}