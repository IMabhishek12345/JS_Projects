'use strict';
const showModal=document.querySelectorAll(".show-modal");
const modal=document.querySelector(".modal");
const closeModal=document.querySelector(".close-modal");
const overlay=document.querySelector(".overlay");

const removemodal=()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");  
}
const addmodal=()=>{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

document.addEventListener("keydown",(e)=>{

    // console.log(e.key);
    if (e.key==="Escape"){
        if (!modal.classList.contains("hidden")){
            // modal.classList.add("hidden");
            // overlay.classList.add("hidden");  
            removemodal();       
        }
    }
}
)

closeModal.addEventListener("click",removemodal);

for (let i=0; i<showModal.length;i++){
     showModal[i].addEventListener("click",addmodal);
}