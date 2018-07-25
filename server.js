const nodeFetch = require('node-fetch');
const fs = require('fs');

const coinurl = 'https://api.bitfinex.com/v1/trades/';
const coinArr = ['btcusd', 'ethusd'];

coinArr.forEach((element) => {
  nodeFetch(coinurl.concat(element))
    .then(res => res.json())
    .then(json => JSON.stringify(json))
    .then(jsonStr => fs.writeFile(`${element}.json`, jsonStr, (err) => {
    /* eslint no-console: ["error", { allow: ["log"]}] */
      if (err) console.log(err);
    }));
});
