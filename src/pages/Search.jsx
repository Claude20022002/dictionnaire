import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Box,
    Button,
    Alert,
    InputBase,
    CircularProgress,
    Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import useFetch from "../hook/useFetch"; // Garder l'import de useFetch

const Section = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    padding: theme.spacing(12, 2),
    scrollMarginTop: "100px",
    background: "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
}));

export default function Search() {
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const { data, isLoading, error } = useFetch(
        searchTerm
            ? `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
            : null
    );

    const handleSearch = () => {
        if (query.trim() !== "") {
            setSearchTerm(query.trim());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        if (data) {
            setSearchTerm(""); // Réinitialise le champ de recherche
        }
    }, [data]);

    // Vérification si les données sont valides
    const isInvalidWord = error?.message === "Not Found" || data?.length === 0;

    return (
        <Section>
            <Container maxWidth="md">
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
                        Recherche de mots
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                            mb: 4,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#fff",
                                borderRadius: 1,
                                width: "300px",
                                paddingLeft: 2,
                            }}
                        >
                            <InputBase
                                sx={{ width: "100%" }}
                                placeholder="Entrez un mot"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            onClick={handleSearch}
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
                            Rechercher
                        </Button>
                    </Box>

                    {/* Affichage de l'état de la recherche */}
                    {isLoading && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 4,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    )}

                    {/* Affichage d'une alerte si le mot est introuvable */}
                    {isInvalidWord && (
                        <Alert severity="warning" sx={{ mt: 4 }}>
                            Mot introuvable ou dans une autre langue. Veuillez
                            essayer un autre mot.
                        </Alert>
                    )}

                    {error && (
                        <Alert severity="error" sx={{ mt: 4 }}>
                            Une erreur est survenue :{" "}
                            {error.message || "Mot introuvable"}
                        </Alert>
                    )}

                    {data && Array.isArray(data) && (
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                Résultat pour "<strong>{searchTerm}</strong>"
                            </Typography>

                            {data.map((entry, index) => (
                                <Box key={index} sx={{ mb: 3 }}>
                                    {/* Affichage du mot */}
                                    <Typography
                                        variant="h5"
                                        component="div" // Utilisation de div au lieu de p
                                        sx={{
                                            mb: 1,
                                            textTransform: "capitalize",
                                            color: "pink",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {entry.word}
                                    </Typography>

                                    {/* Affichage des phonétiques */}
                                    {entry.phonetics.map((phonetic, idx) => (
                                        <Box key={idx} sx={{ mb: 2 }}>
                                            {phonetic.text && (
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: "#ccc",
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    Phonétique: {phonetic.text}
                                                </Typography>
                                            )}
                                            {phonetic.audio && (
                                                <audio controls>
                                                    <source
                                                        src={phonetic.audio}
                                                        type="audio/mpeg"
                                                    />
                                                    Votre navigateur ne supporte
                                                    pas l'élément audio.
                                                </audio>
                                            )}
                                        </Box>
                                    ))}

                                    {/* Affichage des significations */}
                                    {entry.meanings.map((meaning, idx) => (
                                        <Box key={idx} sx={{ mb: 3 }}>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontWeight: "bold",
                                                    color: "yellow",
                                                }}
                                            >
                                                {meaning.partOfSpeech}
                                            </Typography>

                                            {meaning.definitions.map(
                                                (def, defIdx) => (
                                                    <Typography
                                                        key={defIdx}
                                                        variant="body1"
                                                        sx={{ mb: 1 }}
                                                    >
                                                        - {def.definition}
                                                        {def.example && (
                                                            <Box
                                                                sx={{
                                                                    mt: 1,
                                                                    fontStyle:
                                                                        "italic",
                                                                    color: "#aaa",
                                                                }}
                                                            >
                                                                Exemple: "
                                                                {def.example}"
                                                            </Box>
                                                        )}
                                                    </Typography>
                                                )
                                            )}
                                        </Box>
                                    ))}

                                    {/* Affichage des synonymes et antonymes */}
                                    {(entry.meanings[0].synonyms.length > 0 ||
                                        entry.meanings[0].antonyms.length >
                                            0) && (
                                        <Box sx={{ mb: 2 }}>
                                            {entry.meanings[0].synonyms.length >
                                                0 && (
                                                <Typography
                                                    variant="body1"
                                                    sx={{ color: "#ddd" }}
                                                >
                                                    <strong>Synonymes:</strong>{" "}
                                                    {entry.meanings[0].synonyms.join(
                                                        ", "
                                                    )}
                                                </Typography>
                                            )}
                                            {entry.meanings[0].antonyms.length >
                                                0 && (
                                                <Typography
                                                    variant="body1"
                                                    sx={{ color: "#ddd" }}
                                                >
                                                    <strong>Antonymes:</strong>{" "}
                                                    {entry.meanings[0].antonyms.join(
                                                        ", "
                                                    )}
                                                </Typography>
                                            )}
                                        </Box>
                                    )}

                                    {/* Lien vers la source */}
                                    {entry.sourceUrls &&
                                        entry.sourceUrls.length > 0 && (
                                            <Box sx={{ mt: 3 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: "#aaa" }}
                                                >
                                                    Source:{" "}
                                                    <Link
                                                        href={
                                                            entry.sourceUrls[0]
                                                        }
                                                        target="_blank"
                                                        rel="noopener"
                                                        sx={{
                                                            color: "lightblue",
                                                        }}
                                                    >
                                                        {entry.sourceUrls[0]}
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        )}
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </Section>
    );
}
