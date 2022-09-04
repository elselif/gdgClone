import { createContext } from "react";

interface SiteContextProps {
    theme: string;
    setTheme: (theme: string) => void;
    lang: string;
    setLang: (lang: string) => void;
}
const defaultValue: SiteContextProps = {
    theme: "light",
    setTheme: () => {},
    lang: "tr",
    setLang: () => {},
};

const SiteContext = createContext<SiteContextProps>(defaultValue);
export default SiteContext;
