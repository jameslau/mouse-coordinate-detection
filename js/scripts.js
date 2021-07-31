document.addEventListener('mousemove', (event) => {
  // template string for coordinates 
	log.innerText = (`mouse X: ${event.clientX}, mouse Y: ${event.clientY}`);
});

// display template string through innerText by aassigning to ID `coords`. 
const log = document.getElementById('coords');