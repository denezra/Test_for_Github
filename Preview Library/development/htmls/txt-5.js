// Window load
window.onload = function() {
	startAnimation()
	getElem('container').style.fontFamily = 'lato';
	addBorder(getElem('container'), '1px', 'solid', 'black');
}
function startAnimation() {
	setTimeout(function(){
		getElem('text_one').className += ' text-one_animate';
		setTimeout(function(){
			getElem('text_two').className += ' text-two_animate';
			setTimeout(function(){
					getElem('text_three').className += ' text-three_animate';
					setTimeout(secondAnimation,250)
			},100);
		},100);
	},500);
}
function secondAnimation() {
	setTimeout(function(){
		getElem('text_three').className += ' text-three_second-animate';
		setTimeout(function(){
			getElem('text_two').className += ' text-two_second-animate';
			setTimeout(function(){
					getElem('text_one').className += ' text-one_second-animate';
					setTimeout(resetAnimation,250)
			},100);
		},100);
	},500);
}
function resetAnimation() {
	removeClass(getElem('text_one'), 'text-one_animate');
	removeClass(getElem('text_one'), 'text-one_second-animate');
	removeClass(getElem('text_two'), 'text-two_animate');
	removeClass(getElem('text_two'), 'text-two_second-animate');
	removeClass(getElem('text_three'), 'text-three_animate');
	removeClass(getElem('text_three'), 'text-three_second-animate');
	setTimeout(startAnimation,250)
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