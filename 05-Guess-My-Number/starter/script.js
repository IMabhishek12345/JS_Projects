'use strict';

// Note that dom and dom methods are not the part of JS
// instead they are part of WEB APIs which we goona access 
// it from JS code 

// WEB apis are the library written in the javascript
// and are automatically avialable for us to use
// There are more web apis like timers, fetch etc..

let score=20;
let highScore=0;
let secretVal=Math.floor(Math.random()*20)+1;
// console.log(secretVal);
const displayMsg=(message)=>{
    document.querySelector(".message").textContent=message;
}
document.querySelector(".again").addEventListener("click",()=>{
    // location.reload();
    // document.querySelector(".message").textContent="Start guessing...";
    displayMsg("Start guessing...")
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent=20;  
    document.querySelector(".guess").value="";
})

document.querySelector(".check").addEventListener("click",()=>{

    // document.querySelector(".number").textContent=secretVal; 
    let inputVal= Number(document.querySelector(".guess").value);
    // console.log(typeof(inputVal));
    if (inputVal===secretVal){
        // document.querySelector(".message").textContent="Great Job!!!";
        displayMsg("Great Job!!!");
        document.querySelector(".number").textContent=inputVal; 
        // document.querySelector(".score").textContent=20;  
       if (score>highScore){
          highScore=score;
          document.querySelector(".highscore").textContent=highScore;
        }
    }
    else if (inputVal!==secretVal){
        if (score>1){
            score-=1;
            document.querySelector(".message").textContent= inputVal>secretVal?"Too large":"Too low";
            document.querySelector(".score").textContent=score;  
          }else{
            // document.querySelector(".message").textContent="Game Over"
            displayMsg("Game Over")
            document.querySelector(".score").textContent=0;  
          }
    }
    
    // else if(inputVal>secretVal){
    //     if (score>1){
    //         score-=1;
    //         document.querySelector(".message").textContent="Too large";
    //         document.querySelector(".score").textContent=score;  
    //       }else{
    //         document.querySelector(".message").textContent="Game Over"
    //         document.querySelector(".score").textContent=0;  
    //       }
            
    // }else if(inputVal<secretVal){   
    //     if (score>1){
    //         score-=1;
    //         document.querySelector(".message").textContent="Too low";
    //         document.querySelector(".score").textContent=score;
    //     }else{
    //         document.querySelector(".message").textContent="Game Over";
    //         document.querySelector(".score").textContent=0;  
    //     }
    // } 
  
}
);