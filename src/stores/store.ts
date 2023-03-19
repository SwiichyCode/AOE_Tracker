import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface DataSate {
  data: any[];
  setData: (data: any) => void;
  deleteItem: (id: string) => void;
  toggleSold: (id: string) => void;
}

const defaultData = [
  {
    id: uuidv4(),
    sellPrice: 2000,
    buyPrice: 1000,
    benefit: 1000,
    item: "Exemple d'objet",
    date: new Date(),
    sold: false,
  },
];

export const useStore = create<DataSate>()(
  persist(
    (set, get) => ({
      data: defaultData,

      setData: (data: any) => set({ data }),

      deleteItem: (id: string) => {
        const newData = get().data.filter((item: any) => item.id !== id);
        set({ data: newData });
      },

      toggleSold: (id: string) => {
        const newData = get().data.map((item: any) => {
          if (item.id === id) {
            return { ...item, sold: !item.sold };
          }
          return item;
        });
        set({ data: newData });
      },

      editSellPrice: (id: string, sellPrice: number) => {
        console.log("test", id, sellPrice);
        const newData = get().data.map((item: any) => {
          if (item.id === id) {
            return { ...item, sellPrice };
          }
          return item;
        });
        set({ data: newData });
      },
    }),
    {
      name: "my-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
