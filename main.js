var answer = "", gridPos = 4, moveCount = 0, gameFinish = false;

function getWord() {
    answer = words[Math.floor(Math.random() * words.length)]
    console.log(answer)
};

function writeLetter(button) {
    if (moveCount == 5 || gameFinish) {
        return;
    }
    var container = document.getElementsByClassName("container")[0];
    container.children[gridPos].innerText = button.innerText;
    gridPos--;
    moveCount++;
}

function checkGuess() {
    if (moveCount != 5) {
        return;
    }
    let chIdx = 0;
    let correct = 0;
    var container = document.getElementsByClassName("container")[0];
    for (let i = gridPos + 5; i > gridPos; i--) {
        if (container.children[i].innerText == answer[chIdx++]) {
            container.children[i].id = "green";
            correct++;
        } else if (answer.includes(container.children[i].innerText)) {
            container.children[i].id = "yellow";
        } else {
            container.children[i].id = "gray"
        }
    }
    if (correct == 5) {
        result.innerText = "!ניצחת"
        result.style.opacity = 1;
        gameFinish = true;
    } else if (gridPos == 24) {
        result.innerText = " הפסדת :( המילה הייתה " + answer
        result.style.opacity = 1;
        gameFinish = true;

    }
    gridPos += 10;
    moveCount = 0;
}

function deleteLetter() {
    if (moveCount == 0 || gameFinish) {
        return
    }
    var container = document.getElementsByClassName("container")[0];
    container.children[++gridPos].innerText = "";
    moveCount--;
}
