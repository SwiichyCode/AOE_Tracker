import { useToggleSold } from "../../hooks/useToggleSold";
import { StyledButton } from "../Button";

export const ButtonToggleSold = (props: { id: string; sold: boolean }) => {
  const { id, sold } = props;
  const toggleSold = useToggleSold();

  return (
    <StyledButton
      text="Vendu"
      color={sold ? "success" : "error"}
      onClick={() => {
        toggleSold(id);
      }}
    />
  );
};
