const contEl=document.querySelector(".container");

const careers=["Youtuber" ,"Web Developer" ,"Data Scientist" ,"FreeLancer" ,"Teacher"]

let idx=0;

let charIdx=0;

update();
function update() {
    charIdx++;
    contEl.innerHTML=`<h1>I Am ${careers[idx].slice(0,1)==="i"?"an":"a"} ${careers[idx].slice(0,charIdx)}</h1>`
    
    if (charIdx===careers[idx].length) {
        idx++;
        charIdx=0;
    }
    if (idx===careers.length) {
        idx=0;
    }
    setTimeout(update, 400);
}
