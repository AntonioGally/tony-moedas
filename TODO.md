(14/06/2024)
- Redesign da tabela:
    - Ícones em células
    - Formatter em números
    - Tipografia e cores
- Gráfico utilizando esse endpoint: https://api.coinbase.com/api/v3/brokerage/market/products/BTC-USD/candles?start=1717806825&end=1718411625&granularity=SIX_HOUR
    - https://docs.cdp.coinbase.com/exchange/reference/exchangerestapi_getproductcandles/
    - https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getpubliccandles/
- Dark mode (pegar do sistema)
- WatchList
- Trade link

(17/07/2024)
- Adicionar embed tradingView: https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/
- WatchList
- Trade link

(20/07/2024)
- Posterguei o desenvolvimento dos detalhes de cada moeda
- Ajustar Readme
- Deploy v0.1.0

(30/07/2024)
- Tirar dataProvider do layout, só preciso dele na página de Home
- Adicionar essas infos na página de detalhes:
    - Volume 24h
    - High and Low
    - Last trade
(15/08/2024)
- Adicionar gráfico trading view
(18/08/2024)
- Responsividade
(19/08/2024)
- Adicionar lógica de tabs para cada moeda selecionada
    - Usar Segmented component
    - Máx 5 itens
    - Ver responsividade no Mobile
- Remover lógica de ThemeSwitcher
(21/08/2024)
- Adicionar News Widget: https://www.tradingview.com/widget-docs/widgets/news/top-stories/
    - Remover quando mobile
- Adicionar trade book
