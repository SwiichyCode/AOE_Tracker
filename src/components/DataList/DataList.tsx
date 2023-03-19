import React from "react";
import { useStore } from "../../stores/store";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridSortModel,
  GridFooterContainer,
  GridPagination,
} from "@mui/x-data-grid";
import { columns } from "./params";
import { formatNum } from "../../utils/formatNum";

export const DataList = () => {
  const data = useStore((state: any) => state.data);
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "date",
      sort: "desc",
    },
  ]);

  const CustomFooter = () => {
    const data = useStore((state: any) => state.data);
    const totalBenefit = data.reduce(
      (sum: any, row: any) =>
        sum + (row.sellPrice - row.buyPrice - row.sellPrice * 0.02),
      0
    );

    return (
      <GridFooterContainer>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <div>Total des bénéfices : {formatNum(totalBenefit)}</div>
          <GridPagination />
        </div>
      </GridFooterContainer>
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
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        components={{
          Footer: CustomFooter,
        }}
        componentsProps={{ footer: {} }}
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
