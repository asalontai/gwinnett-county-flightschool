import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Plane from "../../public/Plane.png"

export default function PlaneItem() {
    return (
        <Box
            display={"flex"}
            borderBottom={"2px solid #D3D3D3"}
            sx={{
                '&:hover': {
                    backgroundColor: 'gold',
                },
            }}
        >
            <Image 
                src={Plane}
                width={170}
                height={50}
                alt=""
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
            >
                <Box
                    width={"100px"}
                    bgcolor={"white"}
                    border={"2px solid black"}
                    color={"black"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    marginTop={1}
                    marginLeft={1}
                    marginRight={"auto"}
                >
                    <Typography variant="p">
                        N6701T
                    </Typography>
                </Box>
                <Typography
                    variant="p"
                    marginLeft={1}
                    color={"white"}
                    marginTop={1}
                >
                    Plane Name
                </Typography>
            </Box>
        </Box>
    )
}