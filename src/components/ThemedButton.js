import React from "react";
import { User_Context, userContext } from "../context/user"

function ThemedButton() {
  const theme=React.createContext(User_Context)

  return <button className={theme} />;
}

export default ThemedButton;
