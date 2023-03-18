import React from "react";
import { TextField } from "@mui/material";

interface InputProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  name: string;
}

export const StyledInput = ({
  value,
  onChange,
  type,
  label,
  name,
}: InputProps) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      name={name}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      required={true}
      sx={{ borderColor: "white" }}
      InputLabelProps={{
        sx: {
          color: "black",
        },
      }}
      inputProps={{
        sx: {
          color: "black",
          paddingLeft: "15px",
          fontSize: "20px",
        },
      }}
    />
  );
};
