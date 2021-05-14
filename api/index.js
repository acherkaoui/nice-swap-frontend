require('dotenv').config()
const Binance = require('node-binance-api');
const express = require('express')
const app = express()
const WebSocket = require('ws');
const server = require('http').Server(app)
const io = require('socket.io')(server);

const binance = new Binance().options({
    APIKEY: process.env.APIKEY,
    APISECRET: process.env.APISECRET
});

var balanceAvailable = {};
var ticker = [];
var openOrdersAvailable = [];
function getBalance() {
    binance.balance((error, balances) => {
        if (error) return console.error(error);
        balanceAvailable = balances;
        console.info("balances()", balances);
    });
}

io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});

app.get('/', (req, res) => {
    res.send('API Works !')
})

app.get('/wallet', (req, res) => {
    getBalance()
    res.send(balanceAvailable)
})

// app.get('/open-orders', (req, res)=> {
//     binance.openOrders(req.query.s, (error, openOrders, symbol) => {
//         console.info("openOrders("+symbol+")", openOrders);
//         openOrdersAvailable = openOrders;
//       });
//       res.send(openOrdersAvailable);
// })

app.get('/stream', (req, res) => {
    console.log(ticker)
    getStream(req.query.s);
    res.send(ticker)
})
function getStream(symbol) {
    console.log('Stream Symbol:', symbol.toUpperCase())
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/' + symbol + '@trade');
    ws.on('message', function incoming(data) {
        console.info('Data:', data)
        ticker.push(data);
        io.emit('broadcast', data); // emit an event to all connected sockets
    });
}


app.get('/sell', (req, res) => {
    // These orders will be executed at current market price.
// These orders will be executed at current market price.
let quantity = req.query.quantity;
binance.marketSell(req.query.s, quantity, (error, response) => {
        console.info("Limit Buy response", response);
        console.info("order id: " + response.orderId);
    });


})
server.listen(3000, function () {
    console.log('Votre app est disponible sur localhost:3000 !')
})

// async function asyncGetPrice(symbol) {
//     console.log(symbol)
//     binance.prices(symbol, (error, ticker) => {
//         console.info("Price of " + symbol + ": ", ticker);
//     });
//     // expected output: "resolved"
// }



// // Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
// binance.websockets.candlesticks([process.env.Pair], "1m", (candlesticks) => {
//     let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
//     let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
//     console.info(symbol+" "+interval+" candlestick update");
//     console.info("open: "+open);
//     console.info("high: "+high);
//     console.info("low: "+low);
//     console.info("close: "+close);
//     console.info("volume: "+volume);
//     console.info("isFinal: "+isFinal);
//   });

