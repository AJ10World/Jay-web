const search = document.querySelector("#search")

search.addEventListener("input", openPage);

function openPage (e) {
	// Write what you want to do here
	console.log(e.target.value)
}