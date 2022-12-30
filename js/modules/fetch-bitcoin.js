export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((r) => r.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((e) => console.log(e));
}
