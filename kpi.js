let inputMath, inputChe, inputBio;
inputMath = prompt("Enter the math");
inputChe = prompt("Enter the chemistry");
inputBio = prompt("Enter the biology");
let Math = parseInt(inputMath);
let Che = parseInt(inputChe);
let Bio = parseInt(inputBio);
let ave = (Math + Che + Bio)/3;
document.write("The average is: " + ave);