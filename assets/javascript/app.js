// This will be the time remaining
var time = 15;

var intervalId;

var score = 0;


// when the start button is clicked start the quiz
$("#start").on("click", startQuiz);


// function to start the timer
function startTimer() {
    $("#countdown").html("Time Remaining: " + time + " Seconds");

    intervalId = setInterval(decrement, 1000);
}


function startQuiz () {


    startTimer();

    showQuestions();
}


// a function to decrement the time
function decrement() {

    // decrement time var by 1
    time--;

    // this var needs to be local in order to update properly 
    var timerText = $("<span></span>").text("Time Remaining: " + time + " Seconds");

    // display the new time on the webpage
    $("#countdown").html(timerText);

    // when the timer runs out
    if (time === 0) {
        // end the quiz and display results
        stop();
    }
}

// function to stop the timer
function stop() {
    clearInterval(intervalId);

}


// var questionOne = $("<p></p>").text("On what system did Halo release?");

var choicesOne = "<form align='center'><p id='question-one'>On what system did Halo release?</p><input type='radio' name='question-one' value='xbox'> Xbox <input type='radio' name='question-one' value='playstation'> PlayStation 2 <input type='radio' name='question-one' value='nintendo'> GameCube <input type='radio' name='question-one' value='pc'> PC <br><br><br><input type='submit' value='Submit'></form>";




function showQuestions() {
    // $("#question-area").html(questionOne);
    // $("#question-area").html(choicesOne);
}

function checkAnswers() {
    var answerOne = $("#questionOne").value;
    if (answerOne = "xbox") {
        score++;
    }
}