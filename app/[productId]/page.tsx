import { redirect } from 'next/navigation';
import { productsType } from '../context/data-context/types/products.type';
import ProductDetails from './product-details';
import ProductDetailsProvider from './context/product-details.context';
import ProductTableProvider from '../(Home)/components/product-table/product-table.context';

async function listProduct(productId: string) {
    'use server';
    return fetch(`https://api.coinbase.com/api/v3/brokerage/market/products/${productId}`).then(async (data) => {
        const response = await data.json();
        if (response?.error) throw new Error(response.error);
        return response;
    });
}

const Page = async ({ params }: { params: { productId: string } }) => {
    let productInfo: productsType['products'][0];

    try {
        productInfo = await listProduct(params.productId);
    } catch (error) {
        redirect('/');
    }

    return (
        <ProductDetailsProvider productInfo={productInfo}>
            <ProductTableProvider>
                <ProductDetails />
            </ProductTableProvider>
        </ProductDetailsProvider>
    );
};

export default Page;
