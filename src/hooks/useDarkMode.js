import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  // Use user's default dark mode setting as the page's default
  const preference =
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [darkValue, setDarkValue] = useLocalStorage("Dark Mode", preference)

  return [darkValue, setDarkValue]
}

export default useDarkMode;