import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DataSate {
  data: any[];
  setData: (data: any) => void;
  deleteItem: (id: string) => void;
}

export const useStore = create<DataSate>()(
  persist(
    (set, get) => ({
      data: [],

      setData: (data: any) => set({ data }),

      deleteItem: (id: string) => {
        const newData = get().data.filter((item: any) => item.id !== id);
        set({ data: newData });
      },
    }),
    {
      name: "my-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
