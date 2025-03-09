import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Stack component="header" sx={{ width: "100%", padding: "15px" }}>
                <Stack>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: "bold",
                            boxSizing: "border-box",
                            fontSize: { xs: "1rem", sm: "2rem", md: "3rem" },
                        }}
                    >
                        Dictionnaire
                    </Typography>
                    <Stack component="nav">
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/apropos">À propos</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
