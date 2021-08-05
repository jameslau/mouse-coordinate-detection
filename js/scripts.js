
// set event listener to detect `mousemove`
document.addEventListener('mousemove', (event) => {

  // assign x to the event depending on where clientX is on the browser
  let x = event.clientX
	// template string for coordinates
  log.innerText = (`mouse X: ${event.clientX}, mouse Y: ${event.clientY}`);

  // if mouse is below 500 pixel on the X axis
  if (x > 500) {
    // target body and remove class name
    document.body.className = '';
    console.log("it's over than 500!");
    // if mouse is beyond 500 pixel on the X axis
  } else {
    // target body and add class name
    document.body.className = 'xlarge';
    console.log("it's less than 500!");
  }

});

// display template string through innerText by aassigning to ID `coords`. 
const log = document.getElementById('coords');