/** @format */

const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads > div");
const colors = [
	"lightcoral",
	"rgb(128, 126, 36)",
	"rgb(98, 99, 185)",
	"rgb(240, 214, 128)",
	"rgb(167, 36, 160)",
	"rgb(87, 198, 241)",
];

pads.forEach((pad, index) => {
	pad.addEventListener("click", function () {
		sounds[index].currentTime = 0;
		sounds[index].play();
		animating(index);
	});
});

const animating = (index) => {
	// lets animate the balls
	const ballContainer = document.querySelector(".ball-container");

	let div = document.createElement("div");
	ballContainer.appendChild(div);
	div.style.backgroundColor = colors[index];
	div.classList.add("ball");
	div.style.animation = "jump 1s ease";

	div.addEventListener("animationend", function () {
		div.style.display = "none";
		ballContainer.removeChild(div);
	});
};
