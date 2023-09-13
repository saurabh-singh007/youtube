import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../utils/logo1.jpg";
import { SearchBar } from "./";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: "sticky",
                background: "#000",
                top: 0,
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                // flexDirection: { sx: "column", md: "column" },
            }}
        >
            <Link to="/" style={{ display: "flex", alignItems: "center", height: "3rem", width: "28%" }}>
                {/* <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="white"
                    sx={{
                        "&:hover": {
                            color: "red",
                            cursor: "pointer",
                        },
                    }}
                >
                    
                </Typography> */}
                <img src={logo1} alt="logo" style={{ height: "4rem", borderRadius: "50%" }} />
            </Link>
            <SearchBar />
        </Stack>
    );
};

export default Navbar;
