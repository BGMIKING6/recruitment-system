let passRunning = JSON.parse(localStorage.getItem("pass")) || [];

let table = document.getElementById("healthTable");

passRunning.forEach((c,index)=>{

let row=document.createElement("tr");

row.innerHTML=`

<td>${c.name}</td>
<td>${c.phone}</td>
<td>${c.qualification}</td>

<td>
<input type="number" id="marks${index}" placeholder="Enter Marks">
</td>

<td>
<button onclick="submitHealth(${index})">Submit</button>
</td>

`;

table.appendChild(row);

});

function submitHealth(index){

let marks=document.getElementById("marks"+index).value;

let passRunning = JSON.parse(localStorage.getItem("pass")) || [];

let candidate=passRunning[index];

if(marks >= 50){

candidate.health="Passed";
candidate.healthMarks=marks;

localStorage.setItem("pass",JSON.stringify(passRunning));

alert("Candidate Passed Health Test");

}

else{

candidate.health="Failed";
candidate.healthMarks=marks;
candidate.reason="Failed Health Test (Marks: "+marks+")";

let failList=JSON.parse(localStorage.getItem("fail")) || [];

failList.push(candidate);

localStorage.setItem("fail",JSON.stringify(failList));

passRunning.splice(index,1);

localStorage.setItem("pass",JSON.stringify(passRunning));

alert("Candidate Failed Health Test");

location.reload();

}


}
function passHealth(){

let selected=document.querySelectorAll(".candidate:checked");

selected.forEach(c=>{

let candidate={
name:c.dataset.name,
phone:c.dataset.phone,
email:c.dataset.email,
health:"Passed"
};

let health=JSON.parse(localStorage.getItem("health")) || [];

health.push(candidate);

localStorage.setItem("health",JSON.stringify(health));

});

alert("Candidate Passed Health Test");

}
function failHealth(){

let selected=document.querySelectorAll(".candidate:checked");

selected.forEach(c=>{

let candidate={
name:c.dataset.name,
phone:c.dataset.phone,
email:c.dataset.email,
reason:"Failed Health Test"
};

let fail=JSON.parse(localStorage.getItem("fail")) || [];

fail.push(candidate);

localStorage.setItem("fail",JSON.stringify(fail));

});

alert("Candidate Failed Health Test");

}

