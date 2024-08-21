'use client';

import { PropsWithChildren, createContext, useCallback, useEffect, useState } from 'react';
import { ConfigProvider, theme as AntTheme } from 'antd';

export type productSelectorType = {
    productId: string;
    productName: string;
};

type globalContextTypes = {
    productsSelector: productSelectorType[];
    addProductToList: (product: productSelectorType) => void;
};

export const globalContext = createContext({} as globalContextTypes);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
    const [productsSelector, setProductsSelector] = useState<productSelectorType[]>([]);

    useEffect(() => {
        const session = sessionStorage.getItem('product_ids');
        if (!session) return;
        const savedProducts = JSON.parse(session) as productSelectorType[];
        setProductsSelector(savedProducts);
    }, []);

    const addProductToList = useCallback(
        (product: productSelectorType) => {
            let clone = productsSelector.slice();
            const isProductExistent = clone.find((p) => p.productId === product.productId);
            if (isProductExistent) {
                clone = clone.filter((p) => p.productId !== product.productId);
                clone.unshift(product);
            } else if (clone.length < 5) {
                clone.push(product);
            }

            setProductsSelector(clone);
            sessionStorage.setItem('product_ids', JSON.stringify(clone));
        },
        [productsSelector],
    );

    return (
        <globalContext.Provider value={{ addProductToList, productsSelector }}>
            <ConfigProvider
                theme={{
                    algorithm: AntTheme.darkAlgorithm,
                }}
            >
                {children}
            </ConfigProvider>
        </globalContext.Provider>
    );
};

export default GlobalContextProvider;
