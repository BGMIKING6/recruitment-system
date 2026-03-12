function login(){

let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user==="admin" && pass==="1234"){

window.location="index.html";

}else{

document.getElementById("error").innerText="Wrong ID or Password";

}

}

function passRunning(){

let selected=document.querySelectorAll(".candidate:checked");

selected.forEach(c=>{

let candidate={
name:c.dataset.name,
phone:c.dataset.phone,
email:c.dataset.email,
running:"Passed"
};

let passList=JSON.parse(localStorage.getItem("pass")) || [];

passList.push(candidate);

localStorage.setItem("pass",JSON.stringify(passList));

});

alert("Candidate moved to PASS list");

}

function failRunning(){

let selected=document.querySelectorAll(".candidate:checked");

selected.forEach(c=>{

let candidate={
name:c.dataset.name,
phone:c.dataset.phone,
email:c.dataset.email,
running:"Failed",
reason:"Failed Running Test"
};

let failList=JSON.parse(localStorage.getItem("fail")) || [];

failList.push(candidate);

localStorage.setItem("fail",JSON.stringify(failList));

});

alert("Candidate moved to FAIL list");

}
function resetSystem(){

if(confirm("Reset all recruitment data?")){

localStorage.clear();

alert("All data cleared");

location.reload();

}

}

