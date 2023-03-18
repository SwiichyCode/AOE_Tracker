import { AppBar, Toolbar, Typography } from "@mui/material";

import kamasLogo from "../../assets/kamas.png";
export const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#0b1727" }}>
      <Toolbar>
        <img src={kamasLogo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "#2c7be5",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginLeft: "1rem",
          }}
        >
          AOE Tracker
        </Typography>
        {/* <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button> */}
      </Toolbar>
    </AppBar>
  );
};
