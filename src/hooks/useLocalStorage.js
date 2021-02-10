import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : initialValue
  });

  const setValue = (value) => {
    setStoredValue(value);  
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export default useLocalStorage;