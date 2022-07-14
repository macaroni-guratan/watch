let displayArea = document.getElementById('display-area');
displayArea.innerText = '0.0'
pt = 0
seconds = '0'
function startTimer() {
    testTimer = setInterval(function () {
        up()
    }, 100);
}

function stopTimer() {
    clearInterval(testTimer);
}
function ebi() {
    //if いるかわからない
    if (displayArea.innerText == '0.0') {
        startTimer();
    } else {
        stopTimer(),
            startTimer();
    }
    pt = 0;
}
function mayo() {
    pt++;
    if (pt % 2 == 0) {
        seconds = '0.0'
        pt = 0;
        displayArea.innerText = seconds;

    } else (stopTimer());
}
function up() {
    seconds++;
    displayArea.innerText = seconds / 10;
    if (seconds % 10 == 0) {
        displayArea.innerText = seconds / 10 + '.0';
    }
}