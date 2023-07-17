let arr=JSON.parse(localStorage.getItem("log"))||[];

document.getElementById("lbtn").addEventListener("click",functwo)



function functwo(e){
    e.preventDefault();
    let lemail=document.querySelector("#lemail").value
    let lpassword=document.querySelector("#lpassword").value
    console.log(lemail,lpassword);
    if( lemail==""|| lpassword==""){
        alert("please Enter Valid Details")
    }else{
        let data=false;   
        for(let i=0;i<arr.length;i++){
            if(arr[i].email==lemail && arr[i].password==lpassword){
                data=true;
              
            }
        }
        data?alert("login success") : alert("invalid password");
    
        window.location.href="./index.html"
    }
}