import React from "react";
import { useGridApiContext } from "@mui/x-data-grid";
import { useUpdateProperty } from "../../hooks/useUpdateProperty";

export const InputEdit = (props: { id: number; field: any; value: any }) => {
  const { id, field, value } = props;
  const updateProperty = useUpdateProperty();
  const apiRef = useGridApiContext();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    apiRef.current.setEditCellValue({ id, field, value: newValue });
    updateProperty(id, field, newValue);
  };
  return <input type="text" value={value} onChange={handleValueChange} />;
};
