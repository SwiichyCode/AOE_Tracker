import React from "react";
import { useStore } from "../../stores/store";
import {
  DataGrid,
  GridSortModel,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { DataListFooter } from "../DataListFooter";
import { columns } from "./params";

export const DataList = () => {
  const data = useStore((state: any) => state.data);
  const editSellPrice = useStore((state: any) => state.editSellPrice);
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "date",
      sort: "desc",
    },
  ]);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        sx={{ padding: "16px", borderBottom: "1px solid black" }}
      >
        <GridToolbarExport />
        <Typography>Récupère tes données au format CSV</Typography>
      </GridToolbarContainer>
    );
  };

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        componentsProps={{ footer: {} }}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: "1px solid #000", maxWidth: 1250, margin: "auto" }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        components={{
          Footer: DataListFooter,
          Toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};
