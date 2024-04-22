import { create } from 'zustand'

interface ThemeState {
  light: boolean
  toggleTheme: () => void

}

const useTheme = create<ThemeState>(set => ({
  light: true,
  toggleTheme: () => set(state => ({ light: !state.light })),
}))

export default useTheme
