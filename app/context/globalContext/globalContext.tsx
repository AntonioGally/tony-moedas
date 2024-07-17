'use client';

import { PropsWithChildren, createContext, useState } from 'react';
import { GlobalContextTypes, languageType } from './globalContext.types';
import { ConfigProvider, theme as AntTheme } from 'antd';

export const globalContext = createContext({} as GlobalContextTypes);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [language, setLanguage] = useState<languageType>('pt-br');
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    function updateLanguage(newLanguage: languageType) {
        setLanguage(newLanguage);
    }

    function updateTheme(newTheme: 'light' | 'dark') {
        setTheme(newTheme);
    }

    return (
        <globalContext.Provider value={{ language, updateLanguage, updateTheme, theme }}>
            <ConfigProvider
                theme={{
                    algorithm: theme === 'dark' ? AntTheme.darkAlgorithm : AntTheme.defaultAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </globalContext.Provider>
    );
};

export default GlobalContextProvider;
