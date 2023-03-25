let input = document.getElementById('input_id');
let button = document.querySelector('#btn_id');
let text = document.getElementById('text_id');

button.onclick = function() {
    text.innerHTML = input.value;
    input.value = "";
}

let firstNr = document.getElementById('firstNr');
let secondNr = document.getElementById('secondNr');
let addBtn = document.getElementById('addBtn');
let answer = document.getElementById('answer');

addBtn.onclick =  function(){
    answer.innerHTML = +firstNr.value + +secondNr.value;
}

//Search() method
//let searchText ='The best school in the world is Digital School!';
//let result = searchText.search("Digital School");
//document.getElementById('result').innerHTML = result;

//replace() method
//let replaceText ='The best school in the world is Digital School!';
//let result = replaceText.replace("/Digital School/, 'another school");
//document.getElementById('result').innerHTML = result;

//replace() method
//let testText = 'abcdef';
//let regex = new RegExp('abc');
//document.getElementById('result').innerHTML = regex.test(testText);

//match() method
//let matchText = 'My schools is the best school in the world';
//let regex = /school/g;
//document.getElementById('result').innerHTML = matchText.match(regex);

