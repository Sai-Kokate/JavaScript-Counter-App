const conuterValue = document.querySelector("#counter");

// Increment function
function inc(){
  // copying the current value
  let value = parseInt(conuterValue.innerText);
  // adding 1 to the value
  value = value + 1; 
  // replacing with the new value
  conuterValue.innerText = value;
}

// Decrement Function
function dec(){
  // copying the current value
  let value = parseInt(conuterValue.innerText);
  // substracting 1 from the value
  value = value - 1; 
  // replacing with the new value
  conuterValue.innerText = value;
}


// Set to zero
function setToZero() {
  // setting the value to zero
  let value = 0; 
  // replacing with the new value
  conuterValue.innerText = value;
}