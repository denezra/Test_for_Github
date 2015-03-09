// Window load
window.onload = function() {
	var ctr  = 1;
	//startAnimation(ctr)
	getElem('container').style.fontFamily = 'lato';
	addBorder(getElem('container'), '1px', 'solid', 'black');
}
function startAnimation(ctr) {
	var timerOne = setInterval(function() {
	 	if(ctr !== 13) {
	 		getElem('text' + ctr).className += ' texts-appear';
	 		ctr++
	 	} else {
	 		clearInterval(timerOne);
	 		ctr = 1;
	 		setTimeout(function(){
	 			secondAnimation(ctr);
	 		},1000);
	 	}
	},50)
}
function secondAnimation(ctr) {
	console.log('Second Animation');
	var timerTwo = setInterval(function() {
		if(ctr !== 13) {
	 		getElem('text' + ctr).className += ' texts-second-animation';
	 		ctr++
	 	} else {
	 		clearInterval(timerTwo);
	 		setTimeout(function(){
	 			resetAnimation(ctr);
	 		},1500);
	 	}
	}, 50)
}
function resetAnimation(ctr) {
	for (var i = 1; i < ctr; i++) {
		console.log('i ', i);
		removeClass(getElem('text'+i), 'texts-appear');
		removeClass(getElem('text'+i), 'texts-second-animation');
		if(i == 12) {
			console.log('ctr ', ctr);
			ctr = 1;
			setTimeout(function(){
				startAnimation(ctr);
			},200);
			break;
		}
	};
}
// Get element id attribute
function getElem(element) {
	return document.getElementById(element);
}
// Remove specific class
function removeClass(e, c) {
	e.className = e.className.replace( new RegExp('(?:^|\\s)'+c+'(?!\\S)') ,'');
}
// Add Border
function addBorder(element, width, style, color) {
	element.style.border = width + " " + style + " " + color;
}