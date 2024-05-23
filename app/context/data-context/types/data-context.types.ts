export type tickerType = {
    type: string;
    sequence: number;
    product_id: string;
    price: string;
    open_24h: string;
    volume_24h: string;
    low_24h: string;
    high_24h: string;
    volume_30d: string;
    best_bid: string;
    best_bid_size: string;
    best_ask: string;
    best_ask_size: string;
    side: string;
    time: string;
    trade_id: number;
    last_size: string;
};

export type statusType = {
    type: string;
    products: {
        id: string;
        base_currency: string;
        quote_currency: string;
        base_increment: string;
        quote_increment: string;
        display_name: string;
        status: string;
        status_message: null;
        min_market_funds: string;
        post_only: boolean;
        limit_only: boolean;
        cancel_only: boolean;
        fx_stablecoin: boolean;
    }[];
    currencies: {
        id: string;
        name: string;
        display_name: string;
        min_size: string;
        status: string;
        status_message: null;
        max_precision: string;
        convertible_to: string[];
        details: unknown;
        default_network: string;
        supported_networks: {
            id: string;
            name: string;
            status: string;
            contract_address: string;
            crypto_address_link: string;
            crypto_transaction_link: string;
            min_withdrawal_amount: number;
            max_withdrawal_amount: number;
            network_confirmations: number;
            processing_time_seconds: number;
            destination_tag_regex: string;
        }[];
    }[];
};
