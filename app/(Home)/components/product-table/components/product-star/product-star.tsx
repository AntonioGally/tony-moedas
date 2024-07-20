import { StarFilled, StarOutlined } from '@ant-design/icons';
import { useCallback, useContext } from 'react';
import { productTableContext } from '../../product-table.context';
import style from './product-star.module.css';

interface ProductStarProps {
    productId: string;
}
const ProductStar = ({ productId }: ProductStarProps) => {
    const { favoritedProducts, setFavoritedProducts } = useContext(productTableContext);

    const addFavoriteProduct = useCallback(() => {
        const copy = favoritedProducts.slice();
        copy.push(productId);

        localStorage.setItem('FAVORITED_PRODUCTS', JSON.stringify(copy));
        setFavoritedProducts(copy);
    }, [favoritedProducts, setFavoritedProducts, productId]);

    const removeFavoriteProduct = useCallback(() => {
        const copy = favoritedProducts.slice().filter((id) => id !== productId);

        localStorage.setItem('FAVORITED_PRODUCTS', JSON.stringify(copy));
        setFavoritedProducts(copy);
    }, [favoritedProducts, setFavoritedProducts, productId]);

    const getIcon = useCallback(() => {
        const isProductFavorited = favoritedProducts.find((id) => id === productId);
        if (isProductFavorited)
            return <StarFilled className={`${style.starFilled} ${style.star}`} onClick={removeFavoriteProduct} />;

        return <StarOutlined className={`${style.star}`} onClick={addFavoriteProduct} />;
    }, [favoritedProducts, productId, removeFavoriteProduct, addFavoriteProduct]);

    return getIcon();
};

export default ProductStar;
