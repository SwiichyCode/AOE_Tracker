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
      main: "#54cc4b",
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
