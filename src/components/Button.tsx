import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Button = () => {
    const theme = useContext(ThemeContext)
    return (
        <div
            style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
    )
}

export default Button;