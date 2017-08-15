let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields() {
    attempt.value = 0;
    answer.value = Math.floor(Math.random() * 10000).toString();
    console.log(answer.value.length);
    while (answer.value.length < 4) {
        "0" += answer.value;
    }
}