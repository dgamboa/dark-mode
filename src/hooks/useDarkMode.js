import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [darkValue, setDarkValue] = useLocalStorage("Dark Mode")

  return [darkValue, setDarkValue]
}

export default useDarkMode;