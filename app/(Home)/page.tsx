'use client';

import { useContext } from 'react';
import { dataContext } from '../context/data-context/data-context';

const Home = () => {
    const { products, ticker } = useContext(dataContext);

    if (!ticker) return <h1>Loading...</h1>;

    return (
        <div style={{ padding: 24 }}>
            <h1 onClick={() => console.log({ products, ticker })}>Oi</h1>
            {products.products.map((product) => (
                <div key={product.product_id}>
                    <span>
                        {product.base_name}: {ticker[product.product_id]?.price}
                    </span>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Home;
