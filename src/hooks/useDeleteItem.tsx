import { useStore } from "../stores/store";

export const useDeleteItem = () => {
  const deleteItem = useStore((state: any) => state.deleteItem);
  return deleteItem;
};
