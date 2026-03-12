const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR88e0hhFWtk04HNqYLGnkZajSAH0IvZgmjtTAiRpSttpjQ9F3Ck7KRlldKflUX60xF5eB0OZe0YZkz/pub?gid=1204590268&single=true&output=csv";

fetch(sheetURL)
.then(response => response.text())
.then(data => {

let rows = data.split("\n");

let table = document.getElementById("candidateTable");

rows.slice(1).forEach(row => {

let cols = row.split(",");

if(cols.length > 3){

let name = cols[1];
let phone = cols[2];
let email = cols[3];

let tr = document.createElement("tr");

tr.innerHTML = `
<td>
<input type="checkbox" class="candidate"
data-name="${name}"
data-phone="${phone}"
data-email="${email}">
</td>

<td>${name}</td>
<td>${phone}</td>
<td>${email}</td>
`;

table.appendChild(tr);

}

});

});
