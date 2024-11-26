import { create } from "zustand";

interface CallbackModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useCallbackModalStore = create<CallbackModalState>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}));

export default useCallbackModalStore;
