'use client';

import { Flex, Skeleton, Typography } from 'antd';
import useDataContext from '../context/data-context/hooks/useDataContext/useDataContext';
import { coinList } from '../context/data-context/api/mock/coinList';

const Home = () => {
    const { ticker } = useDataContext();

    if (Object.keys(ticker).length === 0) return <Skeleton />;

    return (
        <div style={{ padding: 24 }}>
            {coinList.map((coin) => (
                <Flex key={coin.id} align="vertical">
                    <div>
                        <Typography.Title level={5}>{coin.name}:</Typography.Title>
                        <Typography.Text>{ticker[coin.id]?.price}</Typography.Text>
                    </div>
                </Flex>
            ))}
        </div>
    );
};

export default Home;
