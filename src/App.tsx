import { AppLayout } from "./components/layouts/AppLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { Header } from "./components/Header";
import { FormGroup } from "./components/FormGroup";
import { DataList } from "./components/DataList/DataList";
import { Typography } from "@mui/material";

export const App = () => {
  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <Typography sx={{ textAlign: "center", maxWidth: "500px" }}>
          Nous travaillons activement pour améliorer et mettre à jour
          régulièrement l'application afin de vous offrir la meilleure
          expérience possible. Veuillez noter que les données sont actuellement
          stockées dans votre navigateur.
          <Typography sx={{ color: "red" }}>
            Afin de ne pas perdre vos données, veillez à ne pas réinitialiser
            votre navigateur ni supprimer le localStorage. (Temporaire)
          </Typography>
          Merci de votre compréhension et n'hésitez pas à nous faire part de vos
          suggestions et commentaires.
        </Typography>
        <FormGroup />
        <DataList />
      </MainLayout>
    </AppLayout>
  );
};
