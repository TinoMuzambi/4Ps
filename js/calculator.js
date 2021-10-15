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

const profitTotalEl = document.querySelector(".profit-total");
const prospectiveTotalEl = document.querySelector(".prospective-total");
const popularTotalEl = document.querySelector(".popular-total");
const pictureTotalEl = document.querySelector(".picture-total");

let profitabilityTotal = 0;
let prospectiveTotal = 0;
let popularTotal = 0;
let pictureTotal = 0;

profitTotalEl.innerText = `Total: 0`;
prospectiveTotalEl.innerText = `Total: 0`;
popularTotalEl.innerText = `Total: 0`;
pictureTotalEl.innerText = `Total: 0`;

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
	const totals = {
		profitabilityTotal,
		prospectiveTotal,
		popularTotal,
		pictureTotal,
	};
	localStorage.setItem("credit-totals", JSON.stringify(totals));
});
