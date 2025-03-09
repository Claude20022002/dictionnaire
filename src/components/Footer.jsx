import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { GitHub, LinkedIn, Facebook } from "@mui/icons-material"; // Import des icônes

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
            <Typography variant="body2" sx={{ mb: 2 }}>
                © {new Date().getFullYear()} MonApplication - Tous droits
                réservés.
            </Typography>

            <FooterLinks>
                <Link href="https://github.com" target="_blank" rel="noopener">
                    <IconButton sx={{ color: "#fff" }}>
                        <GitHub />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener"
                >
                    <IconButton sx={{ color: "#fff" }}>
                        <LinkedIn />
                    </IconButton>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener">
                    <IconButton sx={{ color: "#fff" }}>
                        <Facebook />
                    </IconButton>
                </Link>
            </FooterLinks>

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
        </FooterContainer>
    );
};

export default Footer;
