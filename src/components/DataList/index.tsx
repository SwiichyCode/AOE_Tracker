import React from "react";
import { useStore } from "../../stores/store";
import { columns } from "./params";
import { DataGrid, GridSortModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { DataListFooter } from "../DataListFooter";
import { DataListToolbar } from "../DataListToolbar";

export const DataList = () => {
  const data = useStore((state: any) => state.data);
  const editSellPrice = useStore((state: any) => state.editSellPrice);
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "date",
      sort: "desc",
    },
  ]);

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        componentsProps={{ footer: {} }}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: "1px solid #000", maxWidth: 1250, margin: "auto" }}
        components={{
          Footer: DataListFooter,
          Toolbar: DataListToolbar,
        }}
      />
    </Box>
  );
};
