import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

export const DataListToolbar = () => {
  return (
    <GridToolbarContainer
      sx={{ padding: "16px", borderBottom: "1px solid black" }}
    >
      <GridToolbarExport />
      <Typography>Récupère tes données au format CSV</Typography>
    </GridToolbarContainer>
  );
};
