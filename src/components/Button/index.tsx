import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface StyledButtonProps {
  text: string;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onClick: () => void;
}

const buttonTheme = createTheme({
  palette: {
    success: {
      main: "#69ff5e",
    },
  },
});

export const StyledButton = ({ onClick, text, color }: StyledButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="outlined" color={color} onClick={onClick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};
