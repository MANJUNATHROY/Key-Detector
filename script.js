// const box = document.querySelector(".box")

document.addEventListener("keydown", function (e) {
	let keyname = e.keyCode === 32 ? "space" : e.key
	document.querySelector(".keycode").innerText = e.keyCode;
	document.querySelector(".keyname").innerText = keyname.toUpperCase()
	document.querySelector(".key span").innerText = keyname
	document.querySelector(".Code span").innerText = e.keyCode
	document.classList.add("active")
	// console.log(e);
})
