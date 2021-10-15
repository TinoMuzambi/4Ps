const profitWidth = document.getElementById("profit-width");
const prospectiveWidth = document.getElementById("prospective-width");
const popularWidth = document.getElementById("popular-width");
const pictureWidth = document.getElementById("picture-width");
const progress = document.querySelector(".progress");

let currentProfitWidth = 0;
let currentProspectiveWidth = 0;
let currentPopularWidth = 0;
let currentPictureWidth = 0;

profitWidth.value = currentProfitWidth;
prospectiveWidth.value = currentProspectiveWidth;
popularWidth.value = currentPopularWidth;
pictureWidth.value = currentPictureWidth;

progress.style.width = `${
	(currentProfitWidth +
		currentProspectiveWidth +
		currentPopularWidth +
		currentPictureWidth) /
	2
}%`;

profitWidth.addEventListener("change", (e) => {
	currentProfitWidth = e.target.value;
	const total =
		Number.parseInt(currentProfitWidth) +
		Number.parseInt(currentProspectiveWidth) +
		Number.parseInt(currentPopularWidth) +
		Number.parseInt(currentPictureWidth);

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
	currentProspectiveWidth = e.target.value;
	const total =
		Number.parseInt(currentProfitWidth) +
		Number.parseInt(currentProspectiveWidth) +
		Number.parseInt(currentPopularWidth) +
		Number.parseInt(currentPictureWidth);
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
	currentPopularWidth = e.target.value;
	const total =
		Number.parseInt(currentProfitWidth) +
		Number.parseInt(currentProspectiveWidth) +
		Number.parseInt(currentPopularWidth) +
		Number.parseInt(currentPictureWidth);
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
	currentPictureWidth = e.target.value;
	const total =
		Number.parseInt(currentProfitWidth) +
		Number.parseInt(currentProspectiveWidth) +
		Number.parseInt(currentPopularWidth) +
		Number.parseInt(currentPictureWidth);
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
