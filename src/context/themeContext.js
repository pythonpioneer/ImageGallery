// importing requriements
import React, { createContext, useState, useContext, useEffect} from 'react';


// creating a context for app theme
const ThemeContext = createContext(null);

// creating custom context hook to toggle the theme of the app
export const useTheme = () => {
    return useContext(ThemeContext);
};

// now, creating the provider for the app
export const ThemeProvider = (props) => {

    // defining the color palletes for the theme
    const colorPalletes = {
        light: {  // colors for the dark mode
            background: "#FFFFFF",
            text: "#000000"
        },
        dark: {  // colors for the light mode
            background: "#232323",
            text: "#FFFFFF"
        },
    };

    // now, set the theme of the app
    const [theme, setTheme] = useState("light");  // it can be (light | dark)

    // returning the context provider, so that it is accessible for all
    return (

        // wrapping all childrens props
        <ThemeContext.Provider value={{ colorPalletes, theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
