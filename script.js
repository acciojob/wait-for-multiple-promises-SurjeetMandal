const promises = [
	new Promise((resolve) => {
		const time1 = 2;
		setTimeout(() => {
			resolve({name: 'Promise 1', time: time1});
		}, time1 * 1000);
	}),
	new Promise((resolve) => {
		const time2 = 1;
		setTimeout(() => {
			resolve({name: 'Promise 2', time: time2});
		}, time2 * 1000);
	}),
	new Promise((resolve) => {
		const time3 = 3;
		setTimeout(() => {
			resolve({name: 'Promise 3', time: time3});
		}, time3 * 1000);
	}),
];

let tableBody = document.getElementById('output');
let loadingRow = document.getElementById('loading');

Promise.all(promises).then(data => {
	tableBody.removeChild(loadingRow);

	let totalTime = 0;

	data.forEach(item => {
		let tr = document.createElement('tr');
		let cell1 = document.createElement('td');
		let cell2 = document.createElement('td');

		cell1.textContent = item.name;
		cell2.textContent = `${item.time}s`;

		tr.appendChild(cell1);
		tr.appendChild(cell2);
		tableBody.appendChild(tr);

		totalTime += item.time;
	});

	let tr = document.createElement('tr');
	let cell1 = document.createElement('td');
	let cell2 = document.createElement('td');

	cell1.textContent = 'Total';
	cell2.textContent = `${totalTime}s`;

	tr.appendChild(cell1);
	tr.appendChild(cell2);
	tableBody.appendChild(tr);
});
