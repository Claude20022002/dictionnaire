import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const Root = styled("div")(({ theme }) => ({
    background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
    paddingTop: "100px", // pour compenser le header fixe
    color: "#fff",
}));

const Section = styled("section")(({ theme }) => ({
    padding: theme.spacing(10, 0),
    minHeight: "100vh",
}));

export default function Home() {
    return (
        <Root>
            <Container maxWidth="lg">
                {/* Section Accueil */}
                <Section id="accueil">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{ fontWeight: "bold", mb: 4 }}
                        >
                            Bienvenue sur{" "}
                            <span
                                style={{
                                    background:
                                        "linear-gradient(45deg, pink, yellow)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "bold",
                                }}
                            >
                                Dictionnaire Intuitif
                            </span>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                color: "rgba(255, 255, 255, 0.8)",
                                textAlign: "center",
                            }}
                        >
                            Découvrez la définition des mots en un clic,
                            explorez des synonymes, antonymes et améliorez votre
                            vocabulaire en toute simplicité.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                background:
                                    "linear-gradient(45deg, pink, yellow)",
                                color: "#000",
                                fontWeight: "bold",
                                px: 4,
                                py: 1.5,
                                borderRadius: "8px",
                                "&:hover": {
                                    background:
                                        "linear-gradient(45deg, yellow, pink)",
                                },
                            }}
                        >
                            Commencer
                        </Button>
                    </Box>
                </Section>

                {/* Section Fonctionnalités */}
                <Section id="fonctionnalites">
                    <Typography
                        variant="h3"
                        sx={{ mb: 4, textAlign: "center" }}
                    >
                        Fonctionnalités
                    </Typography>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            gap: 4,
                        }}
                    >
                        <Box
                            sx={{
                                width: "300px",
                                padding: 3,
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: 4,
                            }}
                        >
                            <Typography variant="h5">
                                Définitions Rapides
                            </Typography>
                            <Typography>
                                Obtenez des définitions claires et précises pour
                                chaque mot.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: "300px",
                                padding: 3,
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: 4,
                            }}
                        >
                            <Typography variant="h5">
                                Synonymes & Antonymes
                            </Typography>
                            <Typography>
                                Trouvez des mots similaires ou contraires en un
                                clin d'œil.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: "300px",
                                padding: 3,
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: 4,
                            }}
                        >
                            <Typography variant="h5">
                                Historique de Recherche
                            </Typography>
                            <Typography>
                                Consultez les mots que vous avez déjà recherchés
                                pour progresser.
                            </Typography>
                        </Box>
                    </Box>
                </Section>

                {/* Section Contact */}
                <Section id="contact">
                    <Typography
                        variant="h3"
                        sx={{ mb: 4, textAlign: "center" }}
                    >
                        Contact
                    </Typography>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ mb: 2 }}>
                            Une question ? Une suggestion ?
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                background:
                                    "linear-gradient(45deg, pink, yellow)",
                                color: "#000",
                                fontWeight: "bold",
                                "&:hover": {
                                    background:
                                        "linear-gradient(45deg, yellow, pink)",
                                },
                            }}
                        >
                            Nous contacter
                        </Button>
                    </Box>
                </Section>
            </Container>
        </Root>
    );
}
