// importing requriements
import React, { createContext, useState, useContext, useEffect} from 'react';


// creating a context for app theme
const ThemeContext = createContext({
    themeMode: "light",  // theme mode status
    toggleTheme: () => {} // changing the theme of the app  
});

// creating custom context hook to toggle the theme of the app
export const useTheme = () => {
    return useContext(ThemeContext);
};

// now, creating the provider for the app
export const ThemeProvider = (props) => {
    return (

        // wrapping all childrens props
        <ThemeContext.Provider value={{  }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
