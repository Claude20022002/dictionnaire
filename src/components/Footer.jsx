import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { GitHub, LinkedIn, Facebook } from "@mui/icons-material"; // Import des icônes
import { motion } from "framer-motion"; // Importation de Framer Motion

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "#333",
    color: "#fff",
    padding: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "auto", // Pour le placer en bas de la page
}));

const FooterLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(2),
}));

const Footer = () => {
    return (
        <FooterContainer>
            {/* Animation du texte de copyright */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="body2" sx={{ mb: 2 }}>
                    © {new Date().getFullYear()} MonApplication - Tous droits
                    réservés.
                </Typography>
            </motion.div>

            {/* Animation des liens sociaux */}
            <FooterLinks>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Link
                        href="https://github.com/Claude20022002"
                        target="_blank"
                        rel="noopener"
                    >
                        <IconButton sx={{ color: "#fff" }}>
                            <GitHub />
                        </IconButton>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Link
                        href="https://www.linkedin.com/in/lusamote-kimfuta-b20000250/"
                        target="_blank"
                        rel="noopener"
                    >
                        <IconButton sx={{ color: "#fff" }}>
                            <LinkedIn />
                        </IconButton>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Link
                        href="https://www.facebook.com/share/1Yj7qNMj4b/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener"
                    >
                        <IconButton sx={{ color: "#fff" }}>
                            <Facebook />
                        </IconButton>
                    </Link>
                </motion.div>
            </FooterLinks>

            {/* Animation des liens de mentions légales et politique de confidentialité */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                    <Link
                        href="/mentions-legales"
                        sx={{ color: "#ccc", textDecoration: "none" }}
                    >
                        Mentions légales
                    </Link>{" "}
                    |
                    <Link
                        href="/politique-de-confidentialite"
                        sx={{ color: "#ccc", textDecoration: "none" }}
                    >
                        Politique de confidentialité
                    </Link>
                </Typography>
            </motion.div>
        </FooterContainer>
    );
};

export default Footer;
