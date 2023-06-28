// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

const displayDate = () => {
  const currentDate = new Date()


  document.getElementById("display-element").innerHTML = currentDate;
}

console.log(new Date)



// Write a JavaScript program to convert a number to a string.

const numToString = (n) => {

  console.log(`This is a : ${n}`)

    const num  = n.toString();

    console.log(`this is a : ${typeof(num)}`)


 
}

// Write a JavaScript program to convert a string to the number.

const stringToNumber = (s) => {
  console.log(`line 26 stringToNumber: ${typeof(s)}`)

  const num = parseInt(s);
  
  
  
  console.log(`line 41 stringToNumber: ${typeof(num)}`)

  document.getElementById('display-number').innerHTML = num;
  
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  //Work in Progress

  // / document.getElementById('findDataType').addEventListener('click', function (){

    //   let dataInput = parseInt(document.getElementById('d1').value);
    
    //   if (dataInput === "boolean ")
    
    //     return "is boolean"; 
    
    //     alert(dataInput)
    
    
    // })

  
// Write a JavaScript program that adds 2 numbers together.

function calculate() {
  
  var firstNumber = parseFloat(document.getElementById('n1').value);
  var secondNumber = parseFloat(document.getElementById('n2').value);
   var oper = document.getElementById('operators').value
   
   if(oper === 'add') 
      {
        document.getElementById('result').value = firstNumber + secondNumber; 
      }
   if (oper === 'subtract')
     {
       document.getElementById('result').value = firstNumber - secondNumber; 
     }
   if (oper === 'multiply')
     {
       document.getElementById('result').value = firstNumber * secondNumber; 
     }
   
   if (oper === 'divide')
     {
       document.getElementById('result').value = firstNumber / secondNumber; 
     }
   
   
 }


// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
