import { create } from 'zustand'

interface WordState {
  bears: number
  increase: (by: number) => void
}

export const useWordStore = create<WordState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))