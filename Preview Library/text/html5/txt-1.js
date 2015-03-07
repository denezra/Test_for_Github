// Window load
window.onload = function() {
	startAnimation()
}
function startAnimation() {
	var ctr = 1;
	setInterval(function() {
	 	if(ctr != 12) {
	 		getElem('text' + ctr).className += ' texts-appear';
	 		ctr++
	 	}
	},50)
	//setTimeout(resetAnimation, 2000)
}
function resetAnimation() {

	removeClass(getElem('text1'), 'text-appear');
}
// Get element id attribute
function getElem(element) {
	return document.getElementById(element);
}
// Remove specific class 
function removeClass(e, c) {
	e.className = e.className.replace( new RegExp('(?:^|\\s)'+c+'(?!\\S)') ,'');
}