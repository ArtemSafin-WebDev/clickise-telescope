import { create } from "zustand";

interface FiltersStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
