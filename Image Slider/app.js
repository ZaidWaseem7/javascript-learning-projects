const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imgcont=document.querySelector(".image-container");
const imgEl=document.querySelectorAll("img");
let currentimg=1;

let timout;
nextEl.addEventListener("click",()=>{
    currentimg++;
    clearTimeout(timout)
    update();
});
prevEl.addEventListener("click",()=>{
    currentimg--;
    clearTimeout(timout)
    update();
});
update();

function update() {
    if(currentimg>imgEl.length){
        currentimg=1;
    }else if(currentimg<1){
        currentimg=imgEl.length;
    }
    imgcont.style.transform=`translateX(-${((currentimg-1)*500)}px)`;
  timout=  setTimeout(() => {
        currentimg++;
        update()
    }, 2000);
}