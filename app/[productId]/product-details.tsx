import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import style from './product-details.module.css';
import InformationSider from './components/information-sider/information-sider';

const ProductDetails = () => {
    return (
        <Layout hasSider>
            <Sider breakpoint={'md'} width={300} className={style.informationSider}>
                <InformationSider />
            </Sider>
            <Content>Content</Content>
            <Sider width={300}>Right</Sider>
        </Layout>
    );
};

export default ProductDetails;
