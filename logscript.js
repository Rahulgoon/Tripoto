let arr=JSON.parse(localStorage.getItem("log"))||[]

document.getElementById("btn").addEventListener("click",funcone)
function funcone(e){
    e.preventDefault();
    let name=document.querySelector("#name").value
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
    //console.log(name,email,password);

if(name=="" || email==""||password==""){
    alert("Please Enter all the Details")
}
else
   {
    let obj={name,email,password};
    console.log(obj);
    arr.push(obj);
    localStorage.setItem("log",JSON.stringify(arr))
    alert("signed up")  
    window.location.href="./sign.html"
   }
}