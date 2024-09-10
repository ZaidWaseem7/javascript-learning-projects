const valueEl=document.querySelector(".value");
const btnEl=document.querySelectorAll(".btn");

let num=JSON.parse(localStorage.getItem("num"));
valueEl.textContent=num;

btnEl.forEach((btn)=>{
     
    btn.addEventListener("click",(e)=>{
        const trgt=e.currentTarget.classList;
        if((trgt.contains("btn-danger"))&&(num>0)){
            num--;
        }else if (trgt.contains("btn-success")) {
            num++;      
        }else{
            num=0;
        }   
        ls();
        valueEl.textContent=num;

       
    });
});


if(num>0){
    valueEl.style.color="green";   }
 else{
    valueEl.style.color="black"
 } 
function ls(){
    localStorage.setItem("num",JSON.stringify(num));
}