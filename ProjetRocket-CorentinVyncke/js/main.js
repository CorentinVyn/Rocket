'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var Boutondecollage = document.getElementById('firing-button');
var span = document.getElementsByTagName('span')[0];
var count = 11;
var img = document.getElementById('rocket');
var etoile = document.getElementById('star');


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function chronometre() {
	Boutondecollage.removeEventListener("click", myTimer);   
    var timer = window.setInterval(() => {
    	count--;
    	span.textContent = count;
    	if (count == 0) {
    		window.clearInterval(timer);
    		img.src="images/rocket3.gif";
    		img.classList.add("tookOff");
    	}   
    }, 1000);
}

function myTimer() {
	Boutondecollage.classList.add("disabled");
	img.src="images/rocket2.gif";
	chronometre();
}




function getRandomInteger (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

Boutondecollage.addEventListener("click", myTimer);

var classDiv;
for (let i = 0; i < 150; i++) {
	switch(getRandomInteger(1,3)) {
		case 1:
			classDiv = "tiny";
			break;
		case 1:
			classDiv = "normal";
			break;
		default:
			classDiv = "big";
	}
	var topetoile = getRandomInteger(1,99);
	var leftetoile = getRandomInteger(1,99);
	etoile.innerHTML += '<div class="star ' + classDiv + '" style=" top: ' + topetoile + '%; left: ' + leftetoile + '%;"></div>';
}