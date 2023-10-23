import { useContext } from "react";

export const ThemeContext = useContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
