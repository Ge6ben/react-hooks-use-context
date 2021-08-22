import React, { useContext}from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";
import { User_Context, userContext } from "../context/user"

function Header() {
  const { user ,setUser} = useContext(User_Context);
  const theme=React.createContext(User_Context)
const setTheme=React.createContext(User_Context)

  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin} >
          {user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle  />
      </nav>
    </header>
  );
}

export default Header;
