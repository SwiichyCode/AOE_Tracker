import { AppLayout } from "./components/layouts/AppLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { Header } from "./components/Header";
import { FormGroup } from "./components/FormGroup";
import { DataList } from "./components/DataList";
import { Box, Typography, Alert } from "@mui/material";

export const App = () => {
  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <FormGroup />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.6rem",
          }}
        >
          <Box sx={{ textAlign: "center", maxWidth: "750px" }}>
            <Alert severity="warning">
              Afin de ne pas perdre vos données, veillez à ne pas réinitialiser
              votre navigateur ni supprimer le localStorage. (Temporaire){" "}
              <Typography component={"a"} href={"https://discord.gg/XJDevHDE"}>
                Rejoignez le discord pour proposer des idées d'amélioration.
              </Typography>
            </Alert>
            <Alert severity="info">
              Vous pouvez modifier la cellule (Name, Prix d'achat, Prix de
              vente), mais il y a encore quelques problèmes à résoudre. Pour
              enregistrer la modification, éditez la cellule, sortez de la
              cellule et cliquez à nouveau pour sauvegarder les modifications
              effectuées.
            </Alert>
          </Box>
          <DataList />
        </Box>
      </MainLayout>
    </AppLayout>
  );
};
