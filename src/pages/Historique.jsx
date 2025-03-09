import React, { useState } from "react";
import { Box, Typography, Stack, Button, Alert } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const Section = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    padding: theme.spacing(12, 2),
    scrollMarginTop: "100px",
    background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export default function Historique() {
    const [searchHistory, setSearchHistory] = useState([
        "Example Word 1",
        "Example Word 2",
        "Example Word 3",
    ]);

    return (
        <Section>
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
                >
                    Historique des Recherches
                </Typography>

                {searchHistory.length === 0 ? (
                    <Alert severity="info" sx={{ mb: 2 }}>
                        Aucune recherche récente.
                    </Alert>
                ) : (
                    <Stack spacing={2} sx={{ textAlign: "center" }}>
                        {searchHistory.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    padding: 2,
                                    borderRadius: 1,
                                }}
                            >
                                <Typography variant="h6">{item}</Typography>
                            </Box>
                        ))}
                    </Stack>
                )}
                <Button
                    variant="outlined"
                    sx={{ mt: 4, display: "block", mx: "auto" }}
                >
                    Effacer l'historique
                </Button>
                <p>Non disponible pour le moment.</p>
            </Box>
        </Section>
    );
}
