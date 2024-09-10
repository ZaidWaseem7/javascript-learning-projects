const textEl=document.getElementById("textarea").addEventListener("input",(e)=>{
    updateCounter(e.target.value)
});

const totalEl=document.getElementById("total-counter");
const remainingEl=document.getElementById("remaining-counter");



function updateCounter(Value){
    // let maxLengthEl=textEl.getAttribute("maxLength");
    totalEl.innerText=Value.length;
    remainingEl.innerText=20-Value.length;
}