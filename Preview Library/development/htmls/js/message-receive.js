window.addEventListener('message', function(e) {
	// Check to make sure that this message came from the correct domain.
	console.log(e.origin);
	// Update the div element to display the message.
	console.log(e.data);
}, false)