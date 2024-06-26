// Function to change button color
function changeColor() {
    const button = document.querySelector('.button');
    button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'orange' : 'orange';
  }
  
  // Function based on current time
  function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    alert(greeting);
  }
  
  // Function to calculate sum 
  function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
  }
  