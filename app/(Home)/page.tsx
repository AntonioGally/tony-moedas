import { listProducts } from '../context/data-context/api';
import { loadCharts } from '../context/data-context/api/get-chart-data/get-chart-data';
import DataContextProvider from '../context/data-context/data-context';
import ProductTable from './components/product-table';

const Home = async () => {
    const products = await listProducts();
    const chartData = await loadCharts(products.products.map((product) => product.product_id));

    return (
        <DataContextProvider products={products} chartData={chartData}>
            <ProductTable />
        </DataContextProvider>
    );
};

export default Home;
