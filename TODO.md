A listagem de moedas está ruim, o ticker channel está ok
O que precisa ser feito aqui é uma mudança de listagem. Hoje você está usando um WS Channel pra listar produtos, mas não faz sentido
Utilize o endpoint de listagem de produtos no Advanced Trade API: https://docs.cdp.coinbase.com/advanced-trade/reference/retailbrokerageapi_getpublicproducts/

Assim que a listagem estiver pronta, organize os WS e comece a montar a tabela