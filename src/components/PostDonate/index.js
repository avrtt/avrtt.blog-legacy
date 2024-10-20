import React, { useEffect } from "react";
import BTC from "../../img/donate/btc.svg";
import ETH from "../../img/donate/eth.svg";
import BNB from "../../img/donate/bnb.svg";
import KoFi from "../../img/donate/kofi.svg";
import PayPal from "../../img/donate/paypal.svg";
import Patreon from "../../img/donate/patreon.svg";
import BTCQR from "../../img/donate/btc-qr.svg";
import ETHQR from "../../img/donate/eth-qr.svg";
import BSCQR from "../../img/donate/bsc-qr.svg";

const logoStyle = {
	'vertical-align': 'middle',
	'margin': '0px 0.1vw 0 0.1vw'
} 

function modal(myImg, qr, address, caption1, caption2) {
	var modal = document.getElementById("myModal");
	var img = document.getElementById(myImg);
	var modalImg = document.getElementById("img01");
	var addressText = document.getElementById("address");
	var caption1Text = document.getElementById("caption1");
	var caption2Text = document.getElementById("caption2");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = qr;
		addressText.innerHTML = address;
		caption1Text.innerHTML = caption1;
		caption2Text.innerHTML = caption2;
	}
	var span = document.getElementsByClassName("close")[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
}

const PostDonate = () => {

  useEffect(() => {
  		window.scrollTo(0, 0)
  		modal("myImg1Post", BTCQR, 'bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d', 'BITCOIN NETWORK', 'Address copied to clipboard!')
		modal("myImg2Post", BSCQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf', 'ERC-20 NETWORK', 'Address copied to clipboard!')
		modal("myImg3Post", ETHQR, '0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf', 'BEP-20 NETWORK', 'Address copied to clipboard!')
	}, [])	

  return (
	<>
        <div class="postDonateIconsWrapper">
            <a target="_blank" href="https://ko-fi.com/avrtt">
                <img src={KoFi} class="postDonateIcon1" alt="kofi_logo" style={logoStyle} />
            </a>
            <a target="_blank" href="https://www.paypal.me/vladaverett">
                <img src={PayPal} class="postDonateIcon3" alt="paypal_logo" style={logoStyle} />
            </a>
            <a target="_blank" href="https://www.patreon.com/avrtt">
                <img src={Patreon} class="postDonateIcon2" alt="patreon_logo" style={logoStyle} />
            </a>
            
            <img src={BTC} id="myImg1Post" class="postDonateIcon4" style={logoStyle} onClick={() => navigator.clipboard.writeText("bc1qe4h2scmc5hq5xjq43uz8xur5ghrkszn00h437d")} />
			<img src={BNB} id="myImg3Post" class="postDonateIcon5" style={logoStyle} onClick={() => navigator.clipboard.writeText("0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf")} />
			<img src={ETH} id="myImg2Post" class="postDonateIcon6" style={logoStyle} onClick={() => navigator.clipboard.writeText("0xabFFf687cE09b39858f4432Ef643129CcC1B5bBf")} />	
		</div>
		
        <div id="myModal" class="modal">
	        <div class="close">
		        <img class="modal-content" id="img01" alt="modal-img" />
		        <div id="address"></div>
		        <div id="caption1"></div>
		        <div id="caption2"></div>
	        </div>
        </div>
		
	</>
  );
};
export default PostDonate;


