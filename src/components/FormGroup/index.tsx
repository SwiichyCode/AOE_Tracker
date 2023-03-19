import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NumericFormat } from "react-number-format";
import { useStore } from "../../stores/store";
import { StyledInput } from "../Input";
import { StyledButton } from "../Button";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  const [numericValues, setNumericValues] = useState({
    buyPrice: 0,
    sellPrice: 0,
  });

  const handleChange = (name: string, value: string) => {
    const numericValue = parseFloat(value.replace(/,/g, ""));

    setValues({
      ...values,
      [name]: value,
    });
    setNumericValues({
      ...numericValues,
      [name]: numericValue,
    });
  };

  const handleSubmit = () => {
    setData([
      ...data,
      {
        buyPrice: numericValues.buyPrice,
        sellPrice: numericValues.sellPrice,
        benefit:
          numericValues.sellPrice -
          numericValues.buyPrice -
          numericValues.sellPrice * 0.02,
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

    setNumericValues({
      buyPrice: 0,
      sellPrice: 0,
    });
  };

  return (
    <InputWrapper>
      <StyledInput
        value={values.item}
        onChange={(event) => handleChange("item", event.target.value)}
        type="text"
        label="Nom de l'objet"
        name="item"
      />
      <NumericFormat
        value={values.buyPrice}
        onValueChange={(valObj) =>
          handleChange("buyPrice", valObj.formattedValue)
        }
        label="Prix d'achat"
        name="buyPrice"
        thousandSeparator=","
        customInput={StyledInput}
      />
      <NumericFormat
        value={values.sellPrice}
        onValueChange={(valObj) =>
          handleChange("sellPrice", valObj.formattedValue)
        }
        label="Prix de vente"
        name="sellPrice"
        thousandSeparator=","
        customInput={StyledInput}
      />
      <StyledButton text="Ajouter" color="success" onClick={handleSubmit} />
    </InputWrapper>
  );
};
