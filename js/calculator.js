// Grab DOM elements.
const noEmployees = document.getElementById("1");
const growth = document.getElementById("2");
const employee = document.getElementById("3");
const revenue = document.getElementById("4");
const satisfaction = document.getElementById("5");
const original = document.getElementById("6");
const diversity = document.getElementById("7");
const values = document.getElementById("8");
const mission = document.getElementById("9");
const goals = document.getElementById("10");
const brand = document.getElementById("11");
const logo = document.getElementById("12");
const followers = document.getElementById("13");
const posts = document.getElementById("14");
const customer = document.getElementById("15");
const innovative = document.getElementById("16");
const education = document.getElementById("17");
const assets = document.getElementById("18");
const social = document.getElementById("19");
const reachability = document.getElementById("20");
const upButton = document.querySelector(".up");

const inputs = document.querySelectorAll('input[type="number"');

const profitTotalEl = document.querySelector(".profit-total");
const prospectiveTotalEl = document.querySelector(".prospective-total");
const popularTotalEl = document.querySelector(".popular-total");
const pictureTotalEl = document.querySelector(".picture-total");

/**
 * Add event listeners for preventing nonsensical input.
 */
inputs.forEach((input) => {
	input.addEventListener("change", (e) => {
		const num = Number.parseInt(e.target.value);
		if (num < 1) e.target.value = 1;
		else if (num > 10) e.target.value = 10;
	});
});

// Initialise elements.
let profitabilityTotal = 0;
let prospectiveTotal = 0;
let popularTotal = 0;
let pictureTotal = 0;

profitTotalEl.innerText = `Total: 0`;
prospectiveTotalEl.innerText = `Total: 0`;
popularTotalEl.innerText = `Total: 0`;
pictureTotalEl.innerText = `Total: 0`;

// Adds event listeners for changing focus on enter press.
noEmployees.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		growth.focus();
	}
});
growth.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		employee.focus();
	}
});
employee.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		revenue.focus();
	}
});
revenue.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		satisfaction.focus();
	}
});
satisfaction.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		original.focus();
	}
});
original.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		diversity.focus();
	}
});
diversity.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		values.focus();
	}
});
values.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		mission.focus();
	}
});
mission.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		goals.focus();
	}
});
goals.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		brand.focus();
	}
});
brand.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		logo.focus();
	}
});
logo.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		followers.focus();
	}
});
followers.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		posts.focus();
	}
});
posts.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		customer.focus();
	}
});
customer.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		innovative.focus();
	}
});
innovative.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		education.focus();
	}
});
education.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		assets.focus();
	}
});
assets.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		social.focus();
	}
});
social.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		reachability.focus();
	}
});
reachability.addEventListener("keydown", (e) => {
	if (e && e.key == "Enter") {
		window.location = "/bar.html";
	}
});

// Adds blur event listeners for changing totals.
noEmployees.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		profitabilityTotal += num;
		profitTotalEl.innerText = `Total: ${profitabilityTotal}`;
	}
});

growth.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		profitabilityTotal += num;
		profitTotalEl.innerText = `Total: ${profitabilityTotal}`;
	}
});
employee.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		profitabilityTotal += num;
		profitTotalEl.innerText = `Total: ${profitabilityTotal}`;
	}
});
revenue.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		profitabilityTotal += num;
		profitTotalEl.innerText = `Total: ${profitabilityTotal}`;
	}
});
satisfaction.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		profitabilityTotal += num;
		profitTotalEl.innerText = `Total: ${profitabilityTotal}`;
	}
});

original.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		prospectiveTotal += num;
		prospectiveTotalEl.innerText = `Total: ${prospectiveTotal}`;
	}
});
diversity.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		prospectiveTotal += num;
		prospectiveTotalEl.innerText = `Total: ${prospectiveTotal}`;
	}
});
values.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		prospectiveTotal += num;
		prospectiveTotalEl.innerText = `Total: ${prospectiveTotal}`;
	}
});
mission.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		prospectiveTotal += num;
		prospectiveTotalEl.innerText = `Total: ${prospectiveTotal}`;
	}
});
goals.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		prospectiveTotal += num;
		prospectiveTotalEl.innerText = `Total: ${prospectiveTotal}`;
	}
});

brand.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		popularTotal += num;
		popularTotalEl.innerText = `Total: ${popularTotal}`;
	}
});
logo.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		popularTotal += num;
		popularTotalEl.innerText = `Total: ${popularTotal}`;
	}
});
followers.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		popularTotal += num;
		popularTotalEl.innerText = `Total: ${popularTotal}`;
	}
});
posts.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		popularTotal += num;
		popularTotalEl.innerText = `Total: ${popularTotal}`;
	}
});
customer.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		popularTotal += num;
		popularTotalEl.innerText = `Total: ${popularTotal}`;
	}
});

innovative.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		pictureTotal += num;
		pictureTotalEl.innerText = `Total: ${pictureTotal}`;
	}
});
education.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		pictureTotal += num;
		pictureTotalEl.innerText = `Total: ${pictureTotal}`;
	}
});
assets.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		pictureTotal += num;
		pictureTotalEl.innerText = `Total: ${pictureTotal}`;
	}
});
social.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		pictureTotal += num;
		pictureTotalEl.innerText = `Total: ${pictureTotal}`;
	}
});
reachability.addEventListener("blur", (e) => {
	const num = Number.parseInt(e.target.value);
	if (num) {
		pictureTotal += num;
		pictureTotalEl.innerText = `Total: ${pictureTotal}`;
	}
	// Save totals to local storage.
	const totals = {
		profitabilityTotal,
		prospectiveTotal,
		popularTotal,
		pictureTotal,
	};
	localStorage.setItem("credit-totals", JSON.stringify(totals));
});

// Up button for scrolling to top.
upButton.addEventListener("click", () => window.scrollTo(0, 0));
