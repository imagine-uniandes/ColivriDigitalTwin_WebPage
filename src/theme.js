import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "36px",
                },
            },
        },

    },
});

export default theme;