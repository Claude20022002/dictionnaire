import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const Section = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    padding: theme.spacing(12, 2),
    scrollMarginTop: "100px",
    backgroundColor: "#121212",
    color: "#fff",
}));

export default function Apropos() {
    return (
        <Section id="apropos">
            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                        À propos
                    </Typography>

                    <Typography variant="body1" sx={{ color: "#ccc" }}>
                        Notre application de dictionnaire vous aide à explorer
                        la richesse de la langue française. Que vous soyez
                        étudiant, professionnel ou passionné de littérature,
                        trouvez les définitions, synonymes et expressions en un
                        clic.
                    </Typography>
                </Box>
            </Container>
        </Section>
    );
}
