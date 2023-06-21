import React , {createContext,useState ,useContext} from "react";


export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {
    const [theme,setTheme] =useState('light');

    // when diffrent colors are there and you using JS to change colore

    //  const themes = {
    //     light: {
    //         // backgroundColor: '#f5f5f5',
    //         // textColor: '#333',
    //       },
    //       dark: {
    //         // backgroundColor: '#333',
    //         // textColor: '#fff',
    //       },
    //       blue: {
    //         // backgroundColor: '#2196f3',
    //         // textColor: '#fff',
    //       },
    //       green: {
    //         // backgroundColor: '#4caf50',
    //         // textColor: '#fff',
    //       },
    //       pink: {
    //         // backgroundColor: '#ff4081',
    //         // textColor: '#fff',
    //       },
    //  }
    // -------------------------------------------------------------------------------------------------------------------------------
    
    // When 2 Colors Only 
    //  const toggleTheme = () =>{
    //     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    // }
    
    // when diffrent colors are there and you using css to change colore
    const themes = ['light', 'dark', 'blue', 'green', 'pink'];

    const toggleTheme = (selectedTheme) => {
        setTheme(selectedTheme)
    }

    // THis is for the 2 where we only have 2 color light and dark -> 
    //const toggkeTheme= ()=>{
    //     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    // }
 
    // This is for the 1 where we use js to change the color -> const themeStyles =themes[theme]
    
    const themeStyles = themes.find(item => item === theme);

    return (
        <ThemeContext.Provider value={{theme,toggleTheme,themeStyles}}>
            {children}
        </ThemeContext.Provider>
    )
}


// we created a custom hook to make easy in importing the context in other files

export const useGlobalContext = () => {
    return useContext(ThemeContext);
  };

