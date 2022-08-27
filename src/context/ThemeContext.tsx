import React, { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}






// import { createContext, useState } from 'react'
// interface AppContextInterface {
//   theme?: string;

// }
// type Props = {
//   children: JSX.Element,
// };

// const ThemeContext = createContext<AppContextInterface | null>(null);

// export const ThemeProvider = ({ children }: Props) => {
//   const [theme, setTheme] = useState<string | null>(null);

//   const values = {
//     theme,
//     setTheme,
//   };

//   return (
//     <ThemeContext.Provider value={values}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }


// export default ThemeContext;