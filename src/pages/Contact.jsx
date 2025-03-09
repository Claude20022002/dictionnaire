import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Alert,
} from "@mui/material";
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        // Here you could integrate actual form submission (e.g. sending to an API)
        setSuccess(true);
        setError(null);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

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

                    <Typography variant="body2" sx={{ mb: 3 }}>
                        📧 clusamote@dictionnaire.fr
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {success && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            Votre message a été envoyé avec succès !
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Nom"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Sujet"
                            variant="outlined"
                            fullWidth
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                background:
                                    "linear-gradient(45deg, pink, yellow)",
                                color: "#000",
                                fontWeight: "bold",
                                "&:hover": {
                                    background:
                                        "linear-gradient(45deg, yellow, pink)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Envoyer
                        </Button>
                    </form>
                </Box>
            </Container>
        </Section>
    );
}
