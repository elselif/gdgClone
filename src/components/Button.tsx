import React, { useContext } from 'react'
import { useState } from 'react';
import ThemeContext from '../context/ThemeContext';


export const Button = () => {
    const data = useContext(ThemeContext);

    return (
        <div>
            Degistir
        </div>
    )
}
