let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;
let score = 0;

let btn = ['pink', 'orange', 'green', 'blue']

let Levelbar = document.querySelector('.currlevel');
let scoreCard = document.querySelector('.score')

document.addEventListener("keypress", function () {
    if (started === false) {
        started = true;

        levelUp();
    }
});

function gamebuttonFlash(btn) {
    btn.classList.add('flashbtn');
    setTimeout(() => {
        btn.classList.remove('flashbtn')
    }, 250);
};

function userFlash(btn) {
    btn.classList.add('userflashbtn');
    setTimeout(() => {
        btn.classList.remove('userflashbtn')
    }, 444);
};

function levelUp() {
    userSequence = [];
    if (started === true) {
        level++;
    }
    Levelbar.innerText = `Level ${level}`;
    scoreCard.innerText = `"Your Score ${score}"`
    let randomIndx = Math.floor(Math.random() * btn.length);
    let randomCol = btn[randomIndx];
    let randombtn = document.querySelector(`.${randomCol}`)
    gamebuttonFlash(randombtn);
    gameSequence.push(randomCol);
}

function userBoxPress() {
    let box = this;
    userFlash(box);
    userSequence.push(this.classList[1]);
    
    console.log(userSequence);
    userResponseCheck(userSequence.length-1);
}

let allboxes = document.querySelectorAll
('.Box');

for (allbox of allboxes) {
    allbox.addEventListener('click', userBoxPress)
}



function userResponseCheck(idx) {
    console.log("curr level :",level);
    console.log(idx)
    if(gameSequence[idx]== userSequence[idx]){
     if (gameSequence.length === userSequence.length) {
        setTimeout(()=>{levelUp()},1000)
        score += 5;
    }
    }else{
        Levelbar.innerText = "Game Over: Try Again by clicking any Key";
        gameReset();
    }
}

function gameReset(){
    started = false;
    level = 0;
    gameSequence = []
    userSequence =[]
}