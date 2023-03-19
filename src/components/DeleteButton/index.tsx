import { useDeleteItem } from "../../hooks/useDeleteItem";
import { StyledButton } from "../Button";

export const DeleteButton = (props: { id: string }) => {
  const { id } = props;
  const deleteItem = useDeleteItem();

  return (
    <StyledButton
      text="Delete"
      color="error"
      onClick={() => {
        deleteItem(id);
      }}
    />
  );
};
