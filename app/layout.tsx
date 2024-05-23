import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Components
import Navbar from './components/navbar';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import GlobalContextProvider from './context/globalContext/globalContext';
import DataContextProvider from './context/data-context/data-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tony moedas',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className} style={{ margin: 0 }}>
                <AntdRegistry>
                    <GlobalContextProvider>
                        <DataContextProvider>
                            <Navbar />
                            {children}
                        </DataContextProvider>
                    </GlobalContextProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
