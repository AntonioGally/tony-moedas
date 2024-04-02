import { useContext } from 'react';
import { globalContext } from './globalContext';

const useGlobalContext = () => {
    if (!globalContext) throw new Error('No context provided');
    const globalContextValues = useContext(globalContext);

    return globalContextValues;
};

export default useGlobalContext;
