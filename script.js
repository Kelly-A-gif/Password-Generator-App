const copybutton = document.querySelector(".copy-button");

const password = document.querySelector(".password");

const changenumber =document.getElementById("changenumber");
const uppercase = document.getElementById("uppercase");
const lowercase =document.getElementById("lowercase");
const number =document.getElementById("number");
const symbol = document.getElementById("symbols");

const generateButton = document.querySelector(".generate-button");

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefjhijklmnopqrstuvwxyz";
let numbers = "1234567890"
let symbols = "!@#$%^&*()_+"


function getUpper(){
    return uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)];
}

function getLower(){
    return lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

// console.log(getLower());
generateButton.addEventListener('click',()=>{
    const nb = changenumber.value;

    let passwordG = "";
    if(uppercase.checked){
        passwordG+= getUpper();

    }
    if(lowercase.checked){
        passwordG += getLower();

    }
    if(number.checked){
        passwordG += getNumber();

    }
    if(symbol.checked){
        passwordG+= getSymbols();

    }
   
    
    for (let i = passwordG.length; i < nb; i++) {
        const x = generatePw();
       passwordG += x;

        
    }
    password.textContent = passwordG;

});

function generatePw(){
    let passwordGenerated = [];
    if(uppercase.checked){
        passwordGenerated.push(getUpper());

    }
    if(lowercase.checked){
        passwordGenerated.push(getLower());

    }
    if(number.checked){
        passwordGenerated.push(getNumber());

    }
    if(symbol.checked){
        passwordGenerated.push(getSymbols());

    }
    if(passwordGenerated.length === 0 ){
        return "";
    }
     console.log(passwordGenerated)
    return passwordGenerated[Math.floor(Math.random() * passwordGenerated.length)];
   
}

copybutton.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');

    const pass =  password.innerText;

    if(!pass){
        return
    }

    textarea.value = pass;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("password copied to clipboard");
});