import React from "react";
import { Stack, Typography, Link } from "@mui/material";

export default function Header() {
    return (
        <Stack
            component="header"
            sx={{
                width: "100%",
                padding: "15px",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 10,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                color: "#fff",
            }}
        >
            <Stack>
                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: "bold",
                        boxSizing: "border-box",
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                    }}
                >
                    Dictionnaire Intuitif
                </Typography>

                <Stack
                    component="nav"
                    direction="row"
                    spacing={4}
                    sx={{
                        marginTop: 2,
                        justifyContent: "center",
                    }}
                >
                    <Link
                        href="#accueil"
                        underline="none"
                        sx={{
                            color: "inherit",
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": { color: "yellow" },
                        }}
                    >
                        Accueil
                    </Link>
                    <Link
                        href="#fonctionnalites"
                        underline="none"
                        sx={{
                            color: "inherit",
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": { color: "yellow" },
                        }}
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="#contact"
                        underline="none"
                        sx={{
                            color: "inherit",
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": { color: "yellow" },
                        }}
                    >
                        Contact
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
}
