const btn=document.getElementById("btn");
const birthday=document.getElementById("birthday");
const result=document.getElementById("result");



function calculateAge() {
    const birthdayvalue=birthday.value;
    if (birthdayvalue==='') {
        alert("Please Enter Your Birthday")
    } else {
        const age=getAge(birthdayvalue)
        result.innerHTML=`Your Age is ${age} ${ age>1 ? "years" : "year"} Old`
    }
}
function getAge(birthdayvalue) {
    const currentDate=new Date();
    const birthdate=new Date(birthdayvalue);
    let age=currentDate.getFullYear()-birthdate.getFullYear();
    const month=currentDate.getMonth()-birthdate.getMonth();
    if(month<0||(month===0 && currentDate.getDate()<birthdate.getDate())){
        age--;
    }
    return age;
}



btn.addEventListener("click",calculateAge);