import React from "react";
import { User_Context } from "../context/user"

function DarkModeToggle() {
  const theme=React.createContext(User_Context)
  const setTheme=React.createContext(User_Context)
  
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
