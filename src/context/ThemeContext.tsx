import { createContext } from 'react'
interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }
  
const ThemeContext = createContext<AppContextInterface | null>(null);

export default ThemeContext;