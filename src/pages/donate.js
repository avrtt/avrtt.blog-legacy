import React from 'react';
import { Helmet } from 'react-helmet'

import BTC from "./img/donate/btc.svg";
import ETH from "./img/donate/eth.svg";
import XMR from "./img/donate/xmr.svg";
import BTCQR from "./img/donate/btc-qr.png";
import ETHQR from "./img/donate/eth-qr.png";
import XMRQR from "./img/donate/xmr-qr.png";
import Search from "./img/donate/search.svg";

const TITLE = 'Donate - Venturing Forth'

const logoStyle = {
	'vertical-align': 'middle'
}; 
 
function copy_long(str) {
	var el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style = {position: 'absolute', left: '-9999px'};
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}
 
const Donate = () => {
  return (
    <>
		<Helmet>
			<title>{ TITLE }</title>
        </Helmet>
        
        <div class="container">		
		<div class="wallet">
			<img src={BTC} alt="btc_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onclick={copy_long('bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d')}><div class="tooltip">bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="myImg1" class="icon" src={BTCQR} alt="bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<a href="https://mempool.space/address/bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
			<div class="currency-name">BTC (BITCOIN NETWORK)</div>
		</div>
		<div class="wallet">
			<img src={ETH} alt="etherium_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onclick={copy_long('0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf')}><div class="tooltip">0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="myImg2" class="icon" src={ETHQR} alt="0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<a href="https://etherscan.io/address/0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf"><img class="icon" src={Search} alt="search_icon" width="18" height="20" style={logoStyle} title="Transaction history" /></a>
			<div class="currency-name">ETH/USDT/USDC (ETHEREUM NETWORK)</div>
		</div>
		<div class="wallet">
			<img src={XMR} alt="xmr_logo" width="60" height="60" style={logoStyle} />
			<code class="address" onclick={copy_long('46qGpovqf577jmfR9b6KZ9ixQXV6TrSMp6YnwM19Us3zjitny9jjtHA753mLisvn7j9ZECJ17UbYEY6xKrRMffrc73aET7N')}><div class="tooltip">46qGpovqf577jmfR9b6KZ...EY6xKrRMffrc73aET7N
			<span class="tooltiptext">Click to copy</span></div></code>&nbsp;
			<img id="myImg4" class="icon" src={XMRQR} alt="46qGpovqf577jmfR9b6KZ...EY6xKrRMffrc73aET7N" width="40" height="40" style={logoStyle} title="QR code" />&nbsp;
			<div class="currency-name">XMR (MONERO NETWORK)</div>
		</div>
	</div>
	<div id="myModal" class="modal">
		<div class="close">
			<img class="modal-content" id="img01" alt="modal-img" />
			<div id="caption"></div>
		</div>
	</div>
    </>
  );
};
  
export default Donate;
