
var bgImageArray = ["bg1.svg", "bg2.svg", "bg3.svg"],
  base = "/assets/img/",
  secs = 4;
bgImageArray.forEach(function (img) {
  new Image().src = base + img; 
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.getElementById('animated-bg').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center";
			document.getElementById('animated-bg').style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
		}, (secs * 1500) * i)	
	}
}
backgroundSequence();