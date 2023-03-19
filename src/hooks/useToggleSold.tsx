import { useStore } from "../stores/store";

export const useToggleSold = () => {
  const toggleSold = useStore((state: any) => state.toggleSold);
  return toggleSold;
};
