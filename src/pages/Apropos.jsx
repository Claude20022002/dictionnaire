import React from "react";
import { Typography, Box } from "@mui/material";
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

const ContentBox = styled(Box)(({ theme }) => ({
    maxWidth: "800px",
    textAlign: "center",
    padding: theme.spacing(3),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: theme.shape.borderRadius,
}));

export default function Apropos() {
    return (
        <Section>
            <ContentBox
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                    À propos
                </Typography>

                <Typography variant="body1" sx={{ color: "#ccc", mb: 3 }}>
                    Notre application de dictionnaire vous aide à explorer la
                    richesse de la langue anglaise. Que vous soyez étudiant,
                    professionnel ou passionné de littérature, trouvez les
                    définitions, synonymes et expressions en un clic.
                </Typography>

                {/* Explications détaillées sur la fonctionnalité et l'objectif de l'application */}
                <Typography variant="body2" sx={{ color: "#ddd", mb: 3 }}>
                    Notre objectif est de rendre l'apprentissage de l'anglais
                    plus accessible. Nous avons conçu une plateforme facile à
                    utiliser, où les utilisateurs peuvent chercher rapidement un
                    mot et obtenir des informations complètes comme des
                    définitions, phonétiques, synonymes et antonymes. Cela
                    permet d'approfondir la compréhension du vocabulaire
                    anglais.
                </Typography>

                <Typography variant="body2" sx={{ color: "#ddd", mb: 3 }}>
                    Nous avons intégré un design moderne, avec une interface
                    claire et intuitive, pour que chaque utilisateur puisse
                    profiter d'une expérience fluide. Que vous soyez sur un
                    ordinateur ou un appareil mobile, l'application s'adapte
                    parfaitement à vos besoins.
                </Typography>

                <Typography variant="body2" sx={{ color: "#ddd" }}>
                    Cette application vise à aider les étudiants en langues, les
                    professionnels ou toute personne cherchant à améliorer son
                    anglais en offrant un accès rapide et précis aux
                    informations linguistiques.
                </Typography>
            </ContentBox>
        </Section>
    );
}
