import React from 'react';
import ProductTable from './product-table';
import ProductTableProvider from './product-table.context';

const Page = () => {
    return (
        <ProductTableProvider>
            <ProductTable />
        </ProductTableProvider>
    );
};
export default Page;
