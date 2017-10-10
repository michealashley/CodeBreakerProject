let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    } else {
        attempts = parseInt(attempt.value) + 1;
        attempt.value = attempts.toString();
    }

    if (getResults(input.value)) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else if (attempt.value === 10) {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    } else {
        setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields() {
    attempt.value = 0;
    answer.value = Math.floor(Math.random() * 10000).toString();
    console.log(answer.value.length);
    while (answer.value.length < 4) {
        "0" + answer.value.toString();
    }
}

function setMessage(reportMessage) {
    document.getElementById('message').innerHTML = reportMessage;
}

function validateInput(enteredValue) {
    if (enteredValue.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input) {
    results = document.getElementById('results');
    resultMessage = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    numberCorrect = 0;
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < answer.value.length; j++) {
            if (input[i] === answer.value[i]) {
                resultMessage = resultMessage + '<span class="glyphicon glyphicon-ok"></span>';
                numberCorrect++;
                break;
            } else if (input[i] === answer.value[j] ) {
                resultMessage = resultMessage + '<span class="glyphicon glyphicon-transfer"></span>';
                break;
            } else if (j === answer.value.length - 1) {
                resultMessage = resultMessage + '<span class="glyphicon glyphicon-remove"></span>';
            }
        }
    }
    results.innerHTML += resultMessage + '</div>';
    if (numberCorrect === answer.value.length) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(winLoss) {
    code = document.getElementById('code');
    code.innerHTML = answer.value;
    if (winLoss) {
        code.className += ' success';
    } else {
        code.className += ' failure';
    }
}

function showReplay() {
    guessing = document.getElementById('guessing-div');
    replay = document.getElementById('replay-div');
    guessing.style.display = 'none';
    replay.style.display = 'block';
}