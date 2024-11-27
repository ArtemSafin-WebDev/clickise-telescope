import { create } from "zustand";

interface SuccessModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useSuccessModalStore = create<SuccessModalState>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}));

export default useSuccessModalStore;
