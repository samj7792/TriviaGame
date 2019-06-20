// This will be the time remaining
var time = 30;

var intervalId;

// var score = 0;



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

        checkAnswers();
    }
}

// function to stop the timer
function stop() {
    clearInterval(intervalId);

}

// this object contains the questions and answer choices
var questions = {

    questionOne : "<br>On what system did Halo: Combat Evolved release? <br>",
    answersOne : [
        "<input type='radio' name='question-one' value='xbox'> Xbox ",
        "<input type='radio' name='question-one' value='playstation'> PlayStation 2 ",
        "<input type='radio' name='question-one' value='nintendo'> GameCube ",
        "<input type='radio' name='question-one' value='pc'> PC <br><br>"
    ],

    questionTwo : "Which game has sold the most units of all time? <br>",
    answersTwo : [
        "<input type='radio' name='question-two' value='pokemon'> Pokemon Red ",
        "<input type='radio' name='question-two' value='minecraft'> Minecraft ",
        "<input type='radio' name='question-two' value='gta'> Grand Theft Auto 5 ",
        "<input type='radio' name='question-two' value='mario'> Super Mario 64 <br><br>"
    ],

    questionThree : "The character 'Master Hand' appeared as an enemy in which game? <br>",
    answersThree : [
        "<input type='radio' name='question-three' value='halo'> Halo: 2 ",
        "<input type='radio' name='question-three' value='candy'> Candy Crush ",
        "<input type='radio' name='question-three' value='pikmin'> Pikmin 2 ",
        "<input type='radio' name='question-three' value='smash'> Super Smash Bros <br><br>"
    ],

    questionFour : "Which pokemon is listed first in the Pokedex? <br>",
    answersFour : [
        "<input type='radio' name='question-four' value='pikachu'> Pikachu ",
        "<input type='radio' name='question-four' value='mew'> Mew ",
        "<input type='radio' name='question-four' value='bulbasaur'> Bulbasaur ",
        "<input type='radio' name='question-four' value='charizard'> Charizard <br><br>"
    ],

    questionFive : "What is the name of Link's sword in The Legend of Zelda? <br>",
    answersFive : [
        "<input type='radio' name='question-five' value='mega'> Mega Sword ",
        "<input type='radio' name='question-five' value='master'> Master Sword ",
        "<input type='radio' name='question-five' value='super'> Super Sword ",
        "<input type='radio' name='question-five' value='special'> Special Sword <br><br>"
    ],

    questionSix : "In what city does Fallout 3 take place? <br>",
    answersSix : [
        "<input type='radio' name='question-six' value='boson'> Boston ",
        "<input type='radio' name='question-six' value='seattle'> Seattle ",
        "<input type='radio' name='question-six' value='washington'> Washington D.C. ",
        "<input type='radio' name='question-six' value='austin'> Austin <br><br>"
    ],

    questionSeven : "What does Sonic collect throughout the levels in his games? <br>",
    answersSeven : [
        "<input type='radio' name='question-seven' value='rings'> Rings ",
        "<input type='radio' name='question-seven' value='coins'> Coins ",
        "<input type='radio' name='question-seven' value='stars'> Stars ",
        "<input type='radio' name='question-seven' value='cakes'> Cakes <br><br>"
    ],

    questionEight : "In the 'Witcher' series, what sword does Geralt use to kill monsters? <br>",
    answersEight : [
        "<input type='radio' name='question-eight' value='gold'> Gold Sword ",
        "<input type='radio' name='question-eight' value='obsidian'> Obsidian Sword ",
        "<input type='radio' name='question-eight' value='steel'> Steel Sword ",
        "<input type='radio' name='question-eight' value='silver'> Silver Sword <br><br>"
    ],

    questionNine : "What game features the characters 'Tracer,' 'Reaper,' and 'McCree'? <br>",
    answersNine : [
        "<input type='radio' name='question-nine' value='overwatch'> Overwatch ",
        "<input type='radio' name='question-nine' value='cod'> Call of Duty ",
        "<input type='radio' name='question-nine' value='cause'> Just Cause ",
        "<input type='radio' name='question-nine' value='kombat'> Mortal Kombat <br><br>"
    ],

    questionTen : "Which Call of Duty game featured the 'Tactical Nuke' kill-streak? <br>",
    answersTen : [
        "<input type='radio' name='question-ten' value='cod5'> World at War ",
        "<input type='radio' name='question-ten' value='mw2'> Modern Warfare 2 ",
        "<input type='radio' name='question-ten' value='advanced'> Advanced Warfare ",
        "<input type='radio' name='question-ten' value='bo2'> Black Ops 2 <br><br>"
    ],
}


// var questionOne = $("<p></p>").text("On what system did Halo release?");

// var choicesOne = "<form align='center'><p id='question-one'>On what system did Halo release?</p><input type='radio' name='question-one' value='xbox'> Xbox <input type='radio' name='question-one' value='playstation'> PlayStation 2 <input type='radio' name='question-one' value='nintendo'> GameCube <input type='radio' name='question-one' value='pc'> PC <br><br><br><input type='submit' value='Submit'></form>";




function showQuestions() {
    $("#question-area").html(questions.questionOne);
    $("#question-area").append(questions.answersOne);

    $("#question-area").append(questions.questionTwo);
    $("#question-area").append(questions.answersTwo);

    $("#question-area").append(questions.questionThree);
    $("#question-area").append(questions.answersThree);

    $("#question-area").append(questions.questionFour);
    $("#question-area").append(questions.answersFour);

    $("#question-area").append(questions.questionFive);
    $("#question-area").append(questions.answersFive);

    $("#question-area").append(questions.questionSix);
    $("#question-area").append(questions.answersSix);

    $("#question-area").append(questions.questionSeven);
    $("#question-area").append(questions.answersSeven);

    $("#question-area").append(questions.questionEight);
    $("#question-area").append(questions.answersEight);

    $("#question-area").append(questions.questionNine);
    $("#question-area").append(questions.answersNine);

    $("#question-area").append(questions.questionTen);
    $("#question-area").append(questions.answersTen);
}

function checkAnswers() {
    var score = 0;

    // assign the variable answerOne the value of the radio button chosen with name question-one
    var answerOne = $("input[name=question-one]:checked").val();
    console.log(answerOne);

    if (answerOne === "xbox") {
        score++;
    }

    var answerTwo = $("input[name=question-two]:checked").val();
    console.log(answerTwo);

    if (answerTwo === "minecraft") {
        score++;
    }

    var answerThree = $("input[name=question-three]:checked").val();
    console.log(answerThree);

    if (answerThree === "smash") {
        score++;
    }

    var answerFour = $("input[name=question-four]:checked").val();
    console.log(answerFour);

    if (answerFour === "bulbasaur") {
        score++;
    }

    var answerFive = $("input[name=question-five]:checked").val();
    console.log(answerFive);

    if (answerFive === "master") {
        score++;
    }

    var answerSix = $("input[name=question-six]:checked").val();
    console.log(answerSix);

    if (answerSix === "washington") {
        score++;
    }

    var answerSeven = $("input[name=question-seven]:checked").val();
    console.log(answerSeven);

    if (answerSeven === "rings") {
        score++;
    }

    var answerEight = $("input[name=question-eight]:checked").val();
    console.log(answerEight);

    if (answerEight === "silver") {
        score++;
    }

    var answerNine = $("input[name=question-nine]:checked").val();
    console.log(answerNine);

    if (answerNine === "overwatch") {
        score++;
    }

    var answerTen = $("input[name=question-ten]:checked").val();
    console.log(answerTen);

    if (answerTen === "mw2") {
        score++;
    }

    // replace the question-area with:
    $("#question-area").html("All Done<br>");
    $("#question-area").append(score);
}