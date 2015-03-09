// Window load
window.onload = function() {
	startAnimation()
	getElem('container').style.fontFamily = 'lato';
	addBorder(getElem('container'), '1px', 'solid', 'black');
	TweenMax.set(getElem('container'), {perspective:400});
}
function startAnimation() {
	TweenLite.to(getElem('word'), 2, { ease: Elastic.easeOut.config(1, 0.3), rotationX: 180, transformOrigin:"center top" });
	setTimeout(secondAnimation, 1000)
}
function secondAnimation() {
	TweenLite.to(getElem('word-next'), 2, { ease: Elastic.easeOut.config(1, 0.3), rotationX: 360, transformOrigin:"center top", onComplete:secondAnimation});
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