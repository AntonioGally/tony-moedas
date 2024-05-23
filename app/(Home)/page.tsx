'use client';
import { Flex, Skeleton, Typography } from 'antd';
import { useContext } from 'react';
import { dataContext } from '../context/data-context/data-context';

const Home = () => {
    const { ticker, products } = useContext(dataContext);

    if (!ticker) return <Skeleton />;

    return (
        <div style={{ padding: 24 }}>
            <h1 onClick={() => console.log({ ticker, products })}>oi</h1>
            {ticker.map((tick) => (
                <Flex key={tick.trade_id}>
                    <div>
                        <Typography.Title level={5}>
                            {products.find((product) => product.id === tick.product_id)?.display_name}:
                        </Typography.Title>
                        <Typography.Text>{tick.price}</Typography.Text>
                    </div>
                    <Typography.Text></Typography.Text>
                </Flex>
            ))}
        </div>
    );
};

export default Home;
