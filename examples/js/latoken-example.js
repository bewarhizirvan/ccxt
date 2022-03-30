

const ccxt      = require ('../../ccxt.js')
    , asTable   = require ('as-table').configure ({ delimiter: ' | ' })
    , log       = require ('ololog').unlimited.noLocate.handleNodeErrors ()

//-----------------------------------------------------------------------------

;(async function main () {

    const symbol = 'BTC/USDT'

    const exchange = new ccxt.latoken ({
        'enableRateLimit': true,
        'verbose': process.argv.includes ('--verbose'),
        // uncomment and change for your keys to enable private calls
        // 'apiKey': 'YOUR_API_KEY',
        // 'secret': 'YOUR_API_SECRET',
    })

    await exchange.loadMarkets ()

    log ('-------------------------------------------------------------------')

    log (exchange.id, 'has', exchange.has)

    // public API

    log ('-------------------------------------------------------------------')

    const markets = Object.values (exchange.markets)
    log ('Loaded', markets.length, exchange.id, 'markets:')
    log (asTable (markets.map (x => exchange.omit (x, [ 'info', 'limits', 'precision' ]))))

    log ('-------------------------------------------------------------------')

    const currencies = Object.values (exchange.currencies)
    log ('Loaded', currencies.length, exchange.id, 'currencies:')
    log (asTable (currencies.map (x => exchange.omit (x, [ 'info', 'limits' ]))))

    log ('-------------------------------------------------------------------')

    const time = await exchange.fetchTime ()
    log ('Exchange time:', exchange.iso8601 (time))

    log ('-------------------------------------------------------------------')

    const ticker = await exchange.fetchTicker (symbol)
    log (ticker)

    log ('-------------------------------------------------------------------')

    const tickers = await exchange.fetchTickers ()
    log (asTable (Object.values (tickers).map (x =>
        exchange.omit (x, [ 'info', 'bid', 'ask', 'bidVolume', 'askVolume', 'timestamp' ]))))

    log ('-------------------------------------------------------------------')

    const orderbook = await exchange.fetchOrderBook (symbol)
    log (orderbook)

    log ('-------------------------------------------------------------------')

    const trades = await exchange.fetchTrades (symbol)
    log (asTable (trades.map (x => exchange.omit (x, [ 'info', 'timestamp' ]))))

    log ('-------------------------------------------------------------------')

    // private API

    if (exchange.checkRequiredCredentials (false)) {

        const balance = await exchange.fetchBalance ()
        log (exchange.omit (balance, [ 'info' ]))

        log ('-------------------------------------------------------------------')

        const order = await exchange.createOrder (symbol, 'limit', 'buy', 0.001, 10000)
        log (order)

        log ('-------------------------------------------------------------------')

        const openOrders = await exchange.fetchOpenOrders (symbol)
        log (asTable (openOrders.map (x => exchange.omit (x, [ 'info', 'timestamp' ]))))

        log ('-------------------------------------------------------------------')

        const canceled = await exchange.cancelOrder (order['id'], order['symbol'])
        log (canceled)

        log ('-------------------------------------------------------------------')

        const closedOrders = await exchange.fetchClosedOrders (symbol)
        log (asTable (closedOrders.map (x => exchange.omit (x, [ 'info', 'timestamp' ]))))

        log ('-------------------------------------------------------------------')

        const canceledOrders = await exchange.fetchCanceledOrders (symbol)
        log (asTable (canceledOrders.map (x => exchange.omit (x, [ 'info', 'timestamp' ]))))

        log ('-------------------------------------------------------------------')

        const myTrades = await exchange.fetchMyTrades (symbol)
        log (asTable (myTrades.map (x => exchange.omit (x, [ 'info', 'timestamp' ]))))

    }

}) ()