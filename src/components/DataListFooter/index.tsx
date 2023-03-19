import { useStore } from "../../stores/store";
import { GridFooterContainer, GridPagination } from "@mui/x-data-grid";
import { formatNum } from "../../utils/formatNum";

export const DataListFooter = () => {
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
