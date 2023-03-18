import { AppLayout } from "./components/layouts/AppLayout";
import { MainLayout } from "./components/layouts/MainLayout";
import { Header } from "./components/Header";
import { FormGroup } from "./components/FormGroup";
import { DataList } from "./components/DataList/DataList";

export const App = () => {
  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <FormGroup />
        <DataList />
      </MainLayout>
    </AppLayout>
  );
};
