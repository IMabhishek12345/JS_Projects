'use strict';

let playing;
let score;
let activePlayer;
let currentScore;

let dice=document.querySelector(".dice");
// dice.classList.add("hidden");

let ply1score=document.getElementById("score--0");
let ply2score=document.getElementById("score--1");

// let ply1currentscore=document.getElementById("current--0");
// let ply2currentscore=document.getElementById("current--1");


let player1=document.querySelector(".player--0");
let player2=document.querySelector(".player--1");
let rollBtn=document.querySelector(".btn--roll");
let holdBtn=document.querySelector(".btn--hold");
let newgameBtn=document.querySelector(".btn--new");

const init=()=>{
    
    player1.classList.remove("winner");
    player2.classList.remove("winner");
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    dice.classList.add("hidden");
    playing=true;
    activePlayer=0;
    currentScore=0;
    score=[0,0];
    document.getElementById("current--0").innerText=currentScore;    
    document.getElementById("current--1").innerText=currentScore;    
    document.getElementById("score--0").innerText=0;
    document.getElementById("score--1").innerText=0;
   
}
init();
const switchPlayer=()=>{
currentScore=0; 
activePlayer= activePlayer===0?1:0;
player1.classList.toggle("player--active");
player2.classList.toggle("player--active");
}

rollBtn.addEventListener("click",()=>{
    if (playing){

        let rndNum=Math.floor(Math.random()*6+1);
        console.log(rndNum);
        dice.src=`dice-${rndNum}.png`;
        dice.classList.remove("hidden");
        
        if (rndNum!==1){
            currentScore+=rndNum;
            document.getElementById(`current--${activePlayer}`).innerText=currentScore;
            
            
        }else{
            switchPlayer();
        } 
        
    }
        
})

holdBtn.addEventListener("click",()=>{
if (playing){
score[activePlayer]+=currentScore;    
    
document.getElementById(`score--${activePlayer}`).innerText=score[activePlayer];  
if (score[activePlayer]>=20){

  playing=false;
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");  
  document.querySelector(`.player--${activePlayer}`).classList.add("winner");  
  dice.classList.add("hidden");  

}else{
     switchPlayer();
}
}
})

newgameBtn.addEventListener("click",(init));