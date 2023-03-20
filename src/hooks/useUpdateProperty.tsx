import { useStore } from "../stores/store";

export const useUpdateProperty = () => {
  const updateProperty = useStore((state: any) => state.updateProperty);
  return updateProperty;
};
