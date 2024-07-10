import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Components
import Navbar from './components/navbar';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import GlobalContextProvider from './context/globalContext/globalContext';
import DataContextProvider from './context/data-context/data-context';
import { listProducts } from './context/data-context/api';
import { loadCharts } from './context/data-context/api/get-chart-data/get-chart-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tony moedas',
    description: '',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const products = await listProducts();
    const chartData = await loadCharts(products.products.map((product) => product.product_id));

    return (
        <html lang="pt-br">
            <body className={inter.className} style={{ margin: 0 }}>
                <AntdRegistry>
                    <GlobalContextProvider>
                        <DataContextProvider products={products} chartData={chartData}>
                            <Navbar />
                            {children}
                        </DataContextProvider>
                    </GlobalContextProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
