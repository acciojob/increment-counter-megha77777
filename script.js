//your JS code here. If required.
let incrementBtn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");
let count=0;
function incrementCount() {
	count++;
	alert(count);
	counter.innerHTML = count;
}
incrementBtn.addEventListener("click", incrementCount);