import { createContext, useContext, useState } from "react";

interface SiteContextProps {
    theme: string;
    setTheme: (theme: string) => void;
    lang: string;
    setLang: (lang: string) => void;
}
const defaultValue: SiteContextProps = {
    theme: "light",
    setTheme: () => { },
    lang: "tr",
    setLang: () => { },
};
type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const SiteContext = createContext<SiteContextProps>(defaultValue);


const Provider = ({ children }: Props) => {
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('tr')

    const data = {
        theme,
        setTheme,
        lang,
        setLang,
    }
    return (
        <SiteContext.Provider value={data}>
            <div className="App" id={theme}>
                {children}
            </div>
        </SiteContext.Provider>
    )
}

export const useSite = () => useContext(SiteContext)

export default Provider;

