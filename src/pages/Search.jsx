import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Search() {
    return (
        <Box sx={{ paddingTop: "100px" }}>
            <Container maxWidth="md">
                <Typography variant="h3" sx={{ mb: 3 }}>
                    Recherche
                </Typography>
                {/* Ton composant de recherche ici */}
                <Typography>Fonctionnalité de recherche à venir !</Typography>
            </Container>
        </Box>
    );
}
