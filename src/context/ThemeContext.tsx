import React, { createContext, useState } from 'react'
import { theme } from './theme'

export type SetTheme = {
  admin: "string"
}

type PickContentType = {
  pick : SetTheme | null,
  setPick: React.Dispatch<React.SetStateAction<SetTheme | null>>
}

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export const ThemeContext = createContext<PickContentType | null>(null)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [pick, setPick] = useState<SetTheme| null>(null);
  return (
    <ThemeContext.Provider value={{pick,setPick}}>
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