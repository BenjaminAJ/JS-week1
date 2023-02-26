// alert('Hello World');

let firstName='Bond';
let codeName='007';
console.log(firstName)
console.log(codeName)

// Comparison operator
let x = 8;
console.log("x = " + x)
console.log(x===8)  // Type and value
console.log(x==8)   // Value
console.log(x==5)   // Value
console.log(x===5)  // Type and value

// Ternary operator
let age=17;

let voteable = (age < 18) ? "Too young": "Old enough";
console.log(voteable)


function calculate(){
    let value1= document.getElementById('textbox44').value
    let operator= document.getElementById('textbox55').value
    let value2= document.getElementById('textbox66').value

    // Addition
    if (operator == '+'){
        document.getElementById('textbox77').value = Number(value1) + Number(value2)
    }
    // Subtraction
    else if (operator == '-'){
        document.getElementById('textbox77').value = Number(value1) - Number(value2)
    }
    // Multiplication
    else if (operator == '*'){
        document.getElementById('textbox77').value = Number(value1) * Number(value2)
    }
    // Division
    else if (operator == '/'){
        document.getElementById('textbox77').value = Number(value1) / Number(value2)
    }
    // Exponentiation
    else if (operator == '**'){
        document.getElementById('textbox77').value = Number(value1) ** Number(value2)
    }
    // Modulus
    else if (operator == '%'){
        document.getElementById('textbox77').value = Number(value1) % Number(value2)
    }
    // Invalid operator
    else{
        document.getElementById('textbox77').value='invalid operator'
    }

}
// function clear(){
//     document.getElementsByClassName("inputbox").value=null
//     console.log(document.getElementsByClassName("inputbox").value);
// }