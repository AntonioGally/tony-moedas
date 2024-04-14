import { ReactNode } from 'react';
import DataContextProvider from './data-context';
import { coinList } from './api/mock/coinList';

interface PageProps {
    children: ReactNode;
}
const Page = async ({ children }: PageProps) => {
    return <DataContextProvider initialData={{ coinList }}>{children}</DataContextProvider>;
};

export default Page;
