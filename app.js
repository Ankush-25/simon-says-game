let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;

let btn = ['pink','orange','green','blue']

let Levelbar = document.querySelector('.currlevel');

document.addEventListener("keypress",function(){
    if(started === false){
        console.log("The game has been Started");
        started = true;
    }
});

function buttonFlash(btn){
    btn.classList.add('flashbtn');
    setTimeout(()=>{
        btn.classList.remove('flashbtn')
    },1000);
};

function levelUp(){
    if(started === true){
        level++;    
    }
    Levelbar.innerText(`Level${level}`);
    
    let randomIndx = Math.floor(Math.random()*3);
    let randomCol = btn[randomIndx];
    let randombtn = document.querySelector(`".${randomCol}"`)
    buttonFlash(randombtn);

}

levelUp();