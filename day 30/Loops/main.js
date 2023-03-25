var tek="";

for (var i = 1; i < 20; i+=2){
    tek += "The number is" + i + "<br>";
}

document.getElementById('tek').innerHTML = tek;


//console.log(text);

var person = {firstName:"John",  lastName:"Doe", Age:20};
var textP = '';

var z;
for (z in person){
    textP += z + ":" + person[z] + "<br>";
}

document.getElementById('Person').innerHTML = textP;

var names = ['Steve', 'Bill', 'Mark'];
var y;
var textN="";

for(y of names){
    textN += y + " , ";
}
document.getElementById('name').innerHTML = textN;

var txt = "JavaScript";
var x;

for(x of txt){
    document.write(x + "<br>");
}

let n = 0;
do{
    n += 1;
    console.log(n);
} while (n < 5);

 let j = 0;
 while(j<5){
    j = j + 1;

    console.log(j);
    
 }

console.log("------------------");


var Sname = ['Lorik', 'Bill', 'Mark'];

var students ="";
for (var i=0; i<Sname.length;i++){
    students += Sname[i]+'<br>';
}

document.getElementById('nr1').innerHTML = students;

var addstudents = document.getElementById('AddStudent');
var addName = document.getElementById('sname');


addstudents.onclick = function(){
    Sname.push(addname.value);
    addnameF(snames);
}
function addnameF(snames){
    var students="";
    for(var i =0; i<Sname.length; i++){
        students +=Sname[i]+'<br>';
    }
    document.getElementById('nr1').innerHTML = students;
}


var text1 = document.getElementById('text1');
var btn1 = document.getElementById('btn1');
var addedtext = document.getElementById('addedtext');

btn1.onclick = function(){
    addedtext.innerHTML = text1.value;
}









