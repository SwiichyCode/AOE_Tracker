import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#0b1727" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#2c7be5",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          AOE Tracker
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
};
