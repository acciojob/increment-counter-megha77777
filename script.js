//your JS code here. If required.
let incrementBtn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");
let count=0;
function incrementCount() {
	alert(count);
	count++;
	counter.innerHTML = count;
}
incrementBtn.addEventListener("click", incrementCount);