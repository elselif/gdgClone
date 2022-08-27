import { createContext, useState } from 'react'
interface AppContextInterface {
  theme: string;

}
type Props = {
  children: JSX.Element,
};

const ThemeContext = createContext<AppContextInterface | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light');
  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeContext;