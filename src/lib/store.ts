import { create } from 'zustand';

interface MenuState {
    isOpen: boolean;
    setMenuOpen: () => void;
    setMenuManual: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuState>()((set) => ({
    isOpen: false,
    setMenuOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setMenuManual: (isOpen: boolean) => set({ isOpen })
}));
