const inputEl=document.querySelector(".input");
const bodyEl=document.querySelector("body")
inputEl.checked=JSON.parse(localStorage.getItem("mode"));

update()

function update() {
    if(inputEl.checked){
        bodyEl.style.backgroundColor="black"
    }else{
        bodyEl.style.backgroundColor="white";
    }
}


inputEl.addEventListener("input",()=>{
    update();
    ls();
});

function ls() {
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}