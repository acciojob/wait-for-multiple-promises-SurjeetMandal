function Promise1(){
	const time = 2;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({name:'Promise1', time});
		},time * 1000)
	})
}

function Promise2(){
	const time = 1;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({name:'Promise2', time});
		},time * 1000)
	})
}

function Promise3(){
	const time = 3;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({name:'Promise3', time});
		},time * 1000)
	})
}

let promise = [Promise1(),Promise2(),Promise3()];
let tableBody = document.getElementById('output');
let LoadingRow = document.getElementById('loading_row');

Promise.all(promise)
.then(data => {

	tableBody.removeChild(LoadingRow);
	
	data.forEach(items => {

		let tr = document.createElement('tr');
		let cell1 = document.createElement('td');
		let cell2 = document.createElement('td');

		cell1.textContent = items.name;
		cell2.textContent = `${items.time}s`;

		tr.appendChild(cell1);
		tr.appendChild(cell2);
		tableBody.appendChild(tr);
	});
	
	let tr = document.createElement('tr');
	let cell1 = document.createElement('td');
	let cell2 = document.createElement('td');

	cell1.textContent = `Total`;
	cell2.textContent = `6s`;

	tr.appendChild(cell1);
	tr.appendChild(cell2);
	tableBody.appendChild(tr);
})