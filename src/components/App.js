import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider, User_Context } from "../context/user"

function App() {
const theme=React.createContext(User_Context)
  // const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <UserProvider>
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      
        <Header  user={user} setUser={setUser} />
        <Profile user={ user}/>
        </main>    
      </UserProvider>
    
  );
}

export default App;
