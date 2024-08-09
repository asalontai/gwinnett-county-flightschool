import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Plane from "../../public/Plane.png"

export default function Display({ open }) {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={"white"}
            width={open ? "1100px" : "1355px"}
            height={"180px"}
            marginTop={1}
            border={"2px solid black"}
            justifyContent={"space-between"}
            marginLeft={1}
            marginBottom={1}
            borderRadius={"10px 10px 10px 10px"}
        >
            <Image 
                src={Plane}
                width={400}
                height={50}
                alt=""
                className="ml-auto mr-28"
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
            >
                <Box
                    width={"275px"}
                    height={"75px"}
                    bgcolor={"white"}
                    border={"3px solid black"}
                    color={"black"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    marginTop={1}
                    marginLeft={1}
                    marginRight={"auto"}
                >
                    <Typography variant="h2" marginTop={"auto"} marginBottom={"auto"}>
                        N6701T
                    </Typography>
                </Box>
                <Typography
                    variant="h4"
                    marginLeft={1}
                    color={"gray"}
                    marginTop={1}
                >
                    Plane Name
                </Typography>
            </Box>
        </Box>
    )
}