import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { DeleteButton } from "../DeleteButton";
import { formatNum } from "../../utils/formatNum";
import { getBenefitColor } from "../../utils/getBenefitColor";
import { ButtonToggleSold } from "../ButtonToggleSold";
import { InputEdit } from "../InputEdit";

const renderBuyPriceCell = (params: GridRenderCellParams) => {
  const buyPrice = params.row.buyPrice;
  return formatNum(buyPrice);
};

const renderSellPriceCell = (params: GridRenderCellParams) => {
  const sellPrice = params.row.sellPrice;
  return formatNum(sellPrice);
};

const renderBenefitCell = (params: GridRenderCellParams) => {
  const tax = params.row.sellPrice * 0.02; // Calcule la taxe de 2% du prix de vente
  const benefit = params.row.sellPrice - params.row.buyPrice - tax;
  const formattedBenefit = formatNum(benefit);
  const benefitColor = getBenefitColor(benefit);

  return <span style={{ color: benefitColor }}>{formattedBenefit}</span>;
};

const renderBenefitPercentageCell = (params: GridRenderCellParams) => {
  const tax = params.row.sellPrice * 0.02;
  const benefit = params.row.sellPrice - params.row.buyPrice - tax;
  const benefitPercentage = (benefit / params.row.buyPrice) * 100;
  const benefitColor = getBenefitColor(benefit);

  return (
    <span style={{ color: benefitColor }}>
      {benefitPercentage.toFixed(2)} %
    </span>
  );
};

const renderTaxeCell = (params: GridRenderCellParams) => {
  const tax = params.row.sellPrice * 0.02; // Calcule la taxe de 2% du prix de vente
  return formatNum(tax);
};

const renderDeleteCell = (params: GridRenderCellParams) => {
  return <DeleteButton id={params.id as string} />;
};

const renderDateCell = (params: GridRenderCellParams) => {
  const date = new Date(params.row.date);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const renderToggleSold = (params: GridRenderCellParams) => {
  return (
    <ButtonToggleSold
      id={params.id as string}
      sold={params.row.sold as boolean}
    />
  );
};

const renderEditComponent = (props: GridRenderCellParams) => {
  return (
    <InputEdit
      id={props.id as number}
      field={props.field}
      value={props.value}
    />
  );
};

export const columns: GridColDef[] = [
  {
    field: "item",
    headerName: "Item name",
    width: 150,
    editable: true,
    renderEditCell: renderEditComponent,
  },
  {
    field: "buyPrice",
    headerName: "Prix d'achat",
    width: 150,
    editable: true,
    renderCell: renderBuyPriceCell,
    renderEditCell: renderEditComponent,
  },
  {
    field: "sellPrice",
    headerName: "Prix de revente",
    width: 150,
    editable: true,
    renderCell: renderSellPriceCell,
    renderEditCell: renderEditComponent,
  },
  {
    field: "benefit",
    headerName: "Bénéfice",
    width: 150,
    editable: false,
    renderCell: renderBenefitCell,
  },
  {
    field: "benefitPercentage",
    headerName: "Bénéfice (%)",
    width: 150,
    editable: false,
    renderCell: renderBenefitPercentageCell,
    sortable: false,
  },
  {
    field: "taxe",
    headerName: "Taxe",
    width: 150,
    editable: false,
    renderCell: renderTaxeCell,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: false,
    renderCell: renderDateCell,
    type: "date",
    valueGetter: (params) => new Date(params.row.date),
  },
  {
    field: "isSold",
    headerName: "Vendu",
    width: 100,
    editable: false,
    sortable: false,
    renderCell: renderToggleSold,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
    editable: false,
    sortable: false,
    renderCell: renderDeleteCell,
  },
];
