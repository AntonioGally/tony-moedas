'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import { GlobalContextTypes, languageType } from './globalContext.types';

export const globalContext = createContext({} as GlobalContextTypes);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [language, setLanguage] = useState<languageType>('pt-br');

    function updateLanguage(newLanguage: languageType) {
        setLanguage(newLanguage);
    }

    return <globalContext.Provider value={{ language, updateLanguage }}>{children}</globalContext.Provider>;
};

export default GlobalContextProvider;
