// Get the submit button through its id
var submitBtn = document.getElementById('submit');

// Make the output function run when the submit button is clicked on
submitBtn.addEventListener('click', output);

// The function that will provide a random output
function output() {
    // Declare a variable and assign submitted questions by getting value through its id
    var questions = document.getElementById('question').value;
    // Declare a variable and assign output through its id
    var output = document.getElementById('output');
    // Create array with possible answers
    var answerArray = ['No', 'Yes', 'Maybe', 'Undifine', 'Sure', 'Ouroboros'];

    var randNum = (Math.floor(Math.random() * answerArray.length)); // 0-7
    //Check user input 
    // No question --> display message "No input, try again! "
    //Otherwise, display answer
    if (questions.length == 0) {
        output.style.color = "red";
        output.innerHTML = ("Try again!");

    }
    else {
        output.style.color = ("blue");
        output.innerHTML = answerArray[randNum];
    }

}