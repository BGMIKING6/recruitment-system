let passList = JSON.parse(localStorage.getItem("pass")) || [];

let table = document.getElementById("writtenTable");

passList.forEach((c,index)=>{

if(c.health=="Passed"){

let row=document.createElement("tr");

row.innerHTML=`

<td>${c.name}</td>

<td>${c.phone}</td>

<td>
<input type="number" id="eng${index}" placeholder="0-100">
</td>

<td>
<input type="number" id="math${index}" placeholder="0-100">
</td>

<td>
<button onclick="submitWritten(${index})">Submit</button>
</td>

`;

table.appendChild(row);

}

});

function submitWritten(index){

let eng=document.getElementById("eng"+index).value;

let math=document.getElementById("math"+index).value;

let total=parseInt(eng)+parseInt(math);

let passList = JSON.parse(localStorage.getItem("pass")) || [];

let candidate=passList[index];

if(total>=100){

candidate.written="Passed";
candidate.english=eng;
candidate.maths=math;
candidate.total=total;

localStorage.setItem("pass",JSON.stringify(passList));

alert("Candidate Passed Written Exam");

}

else{

candidate.written="Failed";
candidate.english=eng;
candidate.maths=math;
candidate.total=total;
candidate.reason="Failed Written Exam (Total: "+total+")";

let failList=JSON.parse(localStorage.getItem("fail")) || [];

failList.push(candidate);

localStorage.setItem("fail",JSON.stringify(failList));

passList.splice(index,1);

localStorage.setItem("pass",JSON.stringify(passList));

alert("Candidate Failed Written Exam");

location.reload();

}

}