import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NumericFormat } from "react-number-format";
import { useStore } from "../../stores/store";
import { StyledInput } from "../Input";
import { StyledButton } from "../Button";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormGroup = () => {
  const data = useStore((state: any) => state.data);
  const setData = useStore((state: any) => state.setData);

  const [values, setValues] = useState({
    buyPrice: 0,
    sellPrice: 0,
    benefit: 0,
    item: "",
    date: new Date(),
    id: uuidv4(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    setData([
      ...data,
      {
        buyPrice: Number(values.buyPrice),
        sellPrice: Number(values.sellPrice),
        benefit: values.sellPrice - values.buyPrice - values.sellPrice * 0.02,
        item: values.item,
        date: values.date,
        id: values.id,
      },
    ]);

    setValues({
      buyPrice: 0,
      sellPrice: 0,
      item: "",
      benefit: 0,
      date: new Date(),
      id: uuidv4(),
    });
  };

  return (
    <InputWrapper>
      <StyledInput
        value={values.item}
        onChange={handleChange}
        type="text"
        label="Nom de l'objet"
        name="item"
      />
      <NumericFormat
        value={values.buyPrice}
        onChange={handleChange}
        label="Prix d'achat"
        name="buyPrice"
        thousandSeparator=","
        customInput={StyledInput}
      />
      <StyledInput
        value={values.sellPrice}
        onChange={handleChange}
        type="number"
        label="Prix de vente"
        name="sellPrice"
      />

      <StyledButton text="Ajouter" color="success" onClick={handleSubmit} />
    </InputWrapper>
  );
};
