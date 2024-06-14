export interface productsType {
    num_products: number;
    products: {
        product_id: string;
        price: string;
        price_percentage_change_24h: string;
        volume_24h: string;
        volume_percentage_change_24h: string;
        base_increment: string;
        quote_increment: string;
        quote_min_size: string;
        quote_max_size: string;
        base_min_size: string;
        base_max_size: string;
        base_name: string;
        quote_name: string;
        watched: boolean;
        is_disabled: boolean;
        new: boolean;
        status: string;
        cancel_only: boolean;
        limit_only: boolean;
        post_only: boolean;
        trading_disabled: boolean;
        auction_mode: boolean;
        product_type: string;
        quote_currency_id: string;
        base_currency_id: string;
        fcm_trading_session_details: {
            is_session_open: string;
            open_time: string;
            close_time: string;
        };
        mid_market_price: string;
        alias: string;
        alias_to: string[];
        base_display_symbol: string;
        quote_display_symbol: string;
        view_only: boolean;
        price_increment: string;
        future_product_details: {
            venue: string;
            contract_code: string;
            contract_expiry: string;
            contract_size: string;
            contract_root_unit: string;
            group_description: string;
            contract_expiry_timezone: string;
            group_short_description: string;
            risk_managed_by: string;
            contract_expiry_type: string;
            perpetual_details: {
                open_interest: string;
                funding_rate: string;
                funding_time: string;
            };
            contract_display_name: string;
        };
    }[];
}
