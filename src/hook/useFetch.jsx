import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null); // data passe à null par défaut
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Erreur initialisée à null

    useEffect(() => {
        if (!url) return;

        setLoading(true);
        setError(null); // Réinitialiser l'erreur avant chaque nouvelle requête

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const data = await response.json();
                console.table(data);
                setData(data);
            } catch (err) {
                console.error("Erreur de récupération:", err);
                setError({
                    message: err.message || "Une erreur inconnue est survenue",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { isLoading, data, error };
}
