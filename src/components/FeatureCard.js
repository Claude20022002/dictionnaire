const FeatureCard = ({ title, description }) => (
    <Box
        sx={{
            width: "300px",
            p: 3,
            background: colors.cardBg,
            borderRadius: 4,
            transition: "transform 0.3s",
            "&:hover": {
                transform: "translateY(-8px)",
            },
        }}
    >
        <Typography variant="h5" sx={{ mb: 1 }}>
            {title}
        </Typography>
        <Typography>{description}</Typography>
    </Box>
);
