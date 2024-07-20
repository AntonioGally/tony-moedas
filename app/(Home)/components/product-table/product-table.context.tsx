import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

interface ProductTableContext {
    selectedFilter: 'crypto' | 'watchlist';
    setSelectedFilter: React.Dispatch<React.SetStateAction<'crypto' | 'watchlist'>>;
    favoritedProducts: string[];
    setFavoritedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

export const productTableContext = createContext<ProductTableContext>({} as ProductTableContext);

const ProductTableProvider = ({ children }: PropsWithChildren) => {
    const [selectedFilter, setSelectedFilter] = useState<'crypto' | 'watchlist'>('crypto');
    const [favoritedProducts, setFavoritedProducts] = useState<string[]>([]);

    useEffect(() => {
        const favoritedProductsFromLocalStorage = JSON.parse(localStorage.getItem('FAVORITED_PRODUCTS') || '[]');
        setFavoritedProducts(favoritedProductsFromLocalStorage);
    }, []);

    const values = {
        selectedFilter,
        setSelectedFilter,
        favoritedProducts,
        setFavoritedProducts,
    };

    return <productTableContext.Provider value={values}>{children}</productTableContext.Provider>;
};

export default ProductTableProvider;
