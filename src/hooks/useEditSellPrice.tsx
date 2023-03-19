import { useStore } from "../stores/store";

export const useEditSellPrice = () => {
  const editSellPrice = useStore((state: any) => state.editSellPrice);
  return editSellPrice;
};
