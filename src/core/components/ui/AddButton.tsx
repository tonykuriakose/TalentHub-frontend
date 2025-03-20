import { Add } from "@mui/icons-material";
import { IconButton, SxProps, Theme } from "@mui/material";

type AddButtonProps = {
    color?: "white" | "primary" | "black";
    onClick?: () => void;
    sx?: SxProps<Theme>;
};

const AddButton = ({ color = "primary", onClick, sx }: AddButtonProps) => {
    const colorMap = {
        white: "#FFFFFF",
        primary: "primary.main",
        black: "#000000",
    };

    return (
        <IconButton
            onClick={onClick}
            sx={{
                cursor: "pointer",
                color: colorMap[color],
                backgroundColor: color === "white" ? "rgba(0, 0, 0, 0.1)" : "transparent",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
                ...sx, 
            }}
        >
            <Add />
        </IconButton>
    );
};

export default AddButton;
