var answer = ""
var counter = 4;
var count = 0;
var gameFinish=false;

function readText() {
    answer = words[Math.floor(Math.random() * words.length)]
    console.log(answer)
};

function writeWord(button) {
    if (count == 5||gameFinish) {
        return;
    }
    var container = document.getElementsByClassName("container")[0];
    container.children[counter].innerText = button.innerText;
    counter--;
    count++;
}

function checkGuess() {
    if (count != 5) {
        return;
    }
    let ch = 0;
    let correct = 0;
    var container = document.getElementsByClassName("container")[0];
    for (let i = counter + 5; i > counter; i--) {
        if (container.children[i].innerText == answer[ch++]) {
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
    } else if (counter == 24) {
        result.innerText = " הפסדת :( המילה הייתה " + answer
        result.style.opacity = 1;
        gameFinish = true;

    }
    counter += 10;
    count = 0;
}

function deleteLetter() {
    if (count == 0||gameFinish) {
        return
    }
    var container = document.getElementsByClassName("container")[0];
    container.children[++counter].innerText = "";
    count--;
}
