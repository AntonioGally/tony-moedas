import ProductTable from './components/product-table/product-table';

const Home = () => {
    return (
        <div style={{ padding: 24 }}>
            <ProductTable />
            {/* {products.products.map((product) => (
                <div key={product.product_id}>
                    <span>
                        {product.base_name}: {ticker[product.product_id]?.price}
                    </span>
                    <br />
                </div>
            ))} */}
        </div>
    );
};

export default Home;
