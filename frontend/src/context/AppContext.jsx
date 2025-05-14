import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children}) => {
    const value = {
        // Add any state or functions you want to provide to the context
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
} 