import { useContext } from 'react';
import { dataContext } from '../../data-context';

const useDataContext = () => {
    const data = useContext(dataContext);

    if (!dataContext) throw new Error('Use this hook inside DataContext provider');

    return data;
};

export default useDataContext;
