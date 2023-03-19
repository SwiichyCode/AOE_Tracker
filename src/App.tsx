import { AppLayout } from "./components/layouts/AppLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { Header } from "./components/Header";
import { FormGroup } from "./components/FormGroup";
import { DataList } from "./components/DataList";
import { Box, Typography } from "@mui/material";

export const App = () => {
  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <Box sx={{ textAlign: "center", maxWidth: "750px" }}>
          <Typography sx={{ color: "red" }}>
            Afin de ne pas perdre vos données, veillez à ne pas réinitialiser
            votre navigateur ni supprimer le localStorage. (Temporaire)
          </Typography>
          <Typography>Prochaine update: Edition du prix de vente.</Typography>
          <Typography component={"a"} href={"https://discord.gg/XJDevHDE"}>
            Rejoignez le discord pour proposer des idées d'amélioration.
          </Typography>
        </Box>
        <FormGroup />
        <DataList />
      </MainLayout>
    </AppLayout>
  );
};
