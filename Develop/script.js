// Assignment Code

// variables
var parent = []; 

// Selecting Button inside the HTML
document.getElementById('generate').onclick = generatePassword
function generatePassword(){


//prompts
var passLength = prompt("how many characters do u want your password to be? Between 8-128 characters.");

console.log(passLength);

var lowerCase = confirm('Do u want lowercase letters?');

var upperCase = confirm('Do u want Uppercase letters?');

var numbers = confirm('Do u want Numbers?');

var special = confirm('Do u want Special Characters?');

var passLengthInt = parseInt(passLength);

//if statements

//lowercase characters
if (lowerCase) {
  var abclow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"]; 
  parent.push(abclow);
console.log(abclow);
console.log(parent);
}

//uppercase characters
if (upperCase) {
  var abcUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"]; 
  parent.push(abcUp);
console.log(abcUp);
console.log(parent);
}

//numbers
if (numbers) {
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  parent.push(num);
  console.log(num);
  console.log(parent);
}

//special characters
  if (special) {
    var spec = ["!", "#", "$", "%", "&", "@"]; 
    parent.push(spec);
    console.log(spec);
    console.log(parent);
}

//Generating a random number between 0 and parent length. Selecting which array were picking our characters from 
for (i = 0; i < passLengthInt; i++) {
  var random1 = (Math.floor(Math.random() * (parent.length) ));
// selecting which arrays are chosen (lowercase, uppercase, etc.)
  var selector = parent [random1];
  var selectorLength = selector.length;
// last random number generator
  var random2 = (Math.floor(Math.random()* selectorLength ));
// generating the characters
  
var password = parent[random1][random2];
 
//selecting password generation location
  var generate = document.getElementById('password');
 
  // generating the Password Text On the page
  var passwordText = document.createTextNode(password);
  generate.appendChild(passwordText);
}}





