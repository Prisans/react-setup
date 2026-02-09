import React, { createContext } from "react";

const userContext = createContext()

const UserProvider = ({children})=>{
    <userContext.Provider>
        {children}
    </userContext.Provider>
}

