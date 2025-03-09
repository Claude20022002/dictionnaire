import React from "react";
import { Container, Typography, Box } from "@mui/material";
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

export default function Contact() {
    return (
        <Section>
            <Container maxWidth="sm">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                        Contactez-nous
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Une question ? Une suggestion ? N'hésitez pas à nous
                        contacter !
                    </Typography>

                    <Typography variant="body2">
                        📧 clusamote@dictionnaire.fr
                    </Typography>
                </Box>
            </Container>
        </Section>
    );
}
