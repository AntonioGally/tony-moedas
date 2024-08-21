import { Layout } from 'antd';
import style from './product-details.module.css';
import InformationSider from './components/information-sider/information-sider';
import dynamic from 'next/dynamic';

const TradingViewChart = dynamic(() => import('./components/trading-view-chart/trading-view-chart'), {
    ssr: false,
});

const ProductDetails = () => {
    return (
        <Layout hasSider className={style.wrapper}>
            <InformationSider />
            <TradingViewChart />
            {/* <Sider width={300}>Right</Sider> */}
        </Layout>
    );
};

export default ProductDetails;
