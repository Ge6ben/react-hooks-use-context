import React,{useState} from "react";

const User_Context = React.createContext();

// create a provider component
function UserProvider({ children }) {
    // const currentUser = {
    //     name: "Duane",
    //     interests: ["Coding", "Biking", "Words ending in 'ing'"],
    //   };
    const [theme, setTheme] = useState("dark");
  
    const [user ,setUser] = useState(null)
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <User_Context.Provider value={{user,setUser,theme,setTheme}}>{children}</User_Context.Provider>;
  }
  
  export { User_Context, UserProvider }; 