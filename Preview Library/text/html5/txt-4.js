// Window load
window.onload = function() {
	startAnimation()
	getElem('container').style.fontFamily = 'lato';
	addBorder(getElem('container'), '1px', 'solid', 'black');
}
function startAnimation() {
	TweenLite.to(getElem('word-one'), 1, { ease: Back.easeOut.config(1.7), opacity: 1, y: 50, onComplete:secondAnimation});
}
function secondAnimation() {
	setTimeout(function() {
		TweenLite.to(getElem('word-one'), 1, { ease: Back.easeOut.config(1.7), opacity: 0, y: 100, onComplete:resetAnimation});
	},250)
}
function resetAnimation() {
	TweenLite.to(getElem('word-one'), 0.1, { ease: Back.easeOut.config(1.7), opacity: 0, y: 0, onComplete:startAnimation});
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