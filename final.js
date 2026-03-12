let passList = JSON.parse(localStorage.getItem("pass")) || [];

let table = document.getElementById("finalTable");

passList.forEach((c,index)=>{

if(c.running=="Passed" && c.health=="Passed" && c.written=="Passed"){

let row=document.createElement("tr");

row.innerHTML=`

<td>
<input type="checkbox" onclick="referCandidate(${index})">
</td>

<td>${c.name}</td>

<td>${c.phone}</td>

<td>${c.running}</td>

<td>${c.health}</td>

<td>${c.written}</td>

<td>${c.total}</td>

<td>
<button onclick="viewDetails(${index})">View</button>
</td>

`;

table.appendChild(row);

}

});

function referCandidate(index){

let passList = JSON.parse(localStorage.getItem("pass")) || [];

passList[index].referred="Yes";

localStorage.setItem("pass",JSON.stringify(passList));

alert("Candidate Referred");

}

function viewDetails(index){

let passList = JSON.parse(localStorage.getItem("pass")) || [];

let c=passList[index];

alert(

"Name: "+c.name+

"\nPhone: "+c.phone+

"\nQualification: "+c.qualification+

"\nRunning: "+c.running+

"\nHealth Marks: "+c.healthMarks+

"\nEnglish: "+c.english+

"\nMaths: "+c.maths+

"\nTotal: "+c.total

);

}