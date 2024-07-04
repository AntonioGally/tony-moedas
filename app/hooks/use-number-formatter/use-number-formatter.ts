import { useCallback } from 'react';

const useNumberFormatter = () => {
    const formatPrice = useCallback((value: string): string => {
        // Convert the string to a number
        const numberValue = parseFloat(value);

        // Format the number as a price using toLocaleString
        const formattedPrice = numberValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        return formattedPrice;
    }, []);

    return {
        formatPrice,
    };
};

export default useNumberFormatter;
