var tableRef = document.querySelector("table");
var tbody = document.querySelector("tbody");

function insRow() {
	var id = document.querySelector("#id").value;
	var name = document.querySelector("#name").value;
	var year = document.querySelector("#year").value;

	var x = document.getElementById('myTable').insertRow(1);
	var c1 = x.insertCell(0);
	var c2 = x.insertCell(1);
	var c3 = x.insertCell(2);
	c1.innerHTML = id;
	c2.innerHTML = name;
	c3.innerHTML = year;
}

function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, switchcount = 0;
	table = document.getElementById("myTable");
	switching = true;

	while (switching) {

		switching = false;
		rows = table.getElementsByTagName("TR");

		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];

			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}

		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount++;
		} 

	}
}
