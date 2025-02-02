import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Components
import Navbar from './components/navbar';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import GlobalContextProvider from './context/globalContext/globalContext';

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
    return (
        <html lang="en-us">
            <body className={inter.className} style={{ margin: 0 }}>
                <AntdRegistry>
                    <GlobalContextProvider>
                        <Navbar />
                        {children}
                    </GlobalContextProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
