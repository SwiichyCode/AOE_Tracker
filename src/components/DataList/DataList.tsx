import React from "react";
import { useStore } from "../../stores/store";
import { Box } from "@mui/material";
import { DataGrid, GridSortModel } from "@mui/x-data-grid";
import { columns } from "./params";

export const DataList = () => {
  const data = useStore((state: any) => state.data);
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "date",
      sort: "desc",
    },
  ]);

  const totalBenefit = data.reduce(
    (acc: any, item: any) => acc + item.benefit,
    0
  );

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
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: "1px solid #000", maxWidth: 1250, margin: "auto" }}
      />
    </Box>
  );
};
