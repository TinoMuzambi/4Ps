// Grab DOM elements.
const profitWidth = document.getElementById("profit-width");
const prospectiveWidth = document.getElementById("prospective-width");
const popularWidth = document.getElementById("popular-width");
const pictureWidth = document.getElementById("picture-width");
const progress = document.querySelector(".progress");

const inputs = document.querySelectorAll('input[type="number"');

/**
 * Add event listeners for preventing nonsensical input.
 */
inputs.forEach((input) => {
	input.addEventListener("change", (e) => {
		const num = Number.parseInt(e.target.value);
		if (num < 0) e.target.value = 0;
		else if (num > 50) e.target.value = 50;
	});
});

// Get totals from local storage.
const totals = JSON.parse(localStorage.getItem("credit-totals"));
let profitabilityTotal = totals.profitabilityTotal;
let prospectiveTotal = totals.prospectiveTotal;
let popularTotal = totals.popularTotal;
let pictureTotal = totals.pictureTotal;

// Initialise values.
profitWidth.value = profitabilityTotal;
prospectiveWidth.value = prospectiveTotal;
popularWidth.value = popularTotal;
pictureWidth.value = pictureTotal;
const total =
	Number.parseInt(profitabilityTotal) +
	Number.parseInt(prospectiveTotal) +
	Number.parseInt(popularTotal) +
	Number.parseInt(pictureTotal);
if (total > 50 && total < 100) {
	progress.style.background = "linear-gradient(to right, red, orange, yellow)";
} else if (total > 100 && total < 150) {
	progress.style.background =
		"linear-gradient(to right, red, orange, yellow, lime)";
} else if (total > 150) {
	progress.style.background =
		"linear-gradient(to right, red, orange, yellow, lime, rgb(10, 233, 10))";
}
progress.style.width = `${total / 2}%`;

// Adds change event listeners for changing totals.
profitWidth.addEventListener("change", (e) => {
	profitabilityTotal = e.target.value;
	const total =
		Number.parseInt(profitabilityTotal) +
		Number.parseInt(prospectiveTotal) +
		Number.parseInt(popularTotal) +
		Number.parseInt(pictureTotal);

	if (total > 50 && total < 100) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow)";
	} else if (total > 100 && total < 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, lime)";
	} else if (total > 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, lime, rgb(10, 233, 10))";
	}
	progress.style.width = `${total / 2}%`;
});
prospectiveWidth.addEventListener("change", (e) => {
	prospectiveTotal = e.target.value;
	const total =
		Number.parseInt(profitabilityTotal) +
		Number.parseInt(prospectiveTotal) +
		Number.parseInt(popularTotal) +
		Number.parseInt(pictureTotal);
	if (total > 50 && total < 100) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow)";
	} else if (total > 100 && total < 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78))";
	} else if (total > 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78), rgb(10, 233, 10))";
	}
	progress.style.width = `${total / 2}%`;
});
popularWidth.addEventListener("change", (e) => {
	popularTotal = e.target.value;
	const total =
		Number.parseInt(profitabilityTotal) +
		Number.parseInt(prospectiveTotal) +
		Number.parseInt(popularTotal) +
		Number.parseInt(pictureTotal);
	if (total > 50 && total < 100) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow)";
	} else if (total > 100 && total < 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78))";
	} else if (total > 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78), rgb(10, 233, 10))";
	}
	progress.style.width = `${total / 2}%`;
});
pictureWidth.addEventListener("change", (e) => {
	pictureTotal = e.target.value;
	const total =
		Number.parseInt(profitabilityTotal) +
		Number.parseInt(prospectiveTotal) +
		Number.parseInt(popularTotal) +
		Number.parseInt(pictureTotal);
	if (total > 50 && total < 100) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow)";
	} else if (total > 100 && total < 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78))";
	} else if (total > 150) {
		progress.style.background =
			"linear-gradient(to right, red, orange, yellow, rgb(201, 254, 78), rgb(10, 233, 10))";
	}
	progress.style.width = `${total / 2}%`;
});
