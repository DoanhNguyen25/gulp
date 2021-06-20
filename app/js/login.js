// Your main script

const email = document.getElementById("email")
const password = document.getElementById("password")
const btnLogin = document.getElementsByClassName("btn--login")[0]
const notify = document.getElementsByClassName("signin__notify")[0];
const notifyText = document.querySelectorAll(".notify--text")
//regex
const regex_email = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})?$/
console.log(password)
console.log(email)
console.log(btnLogin)
console.log(notifyText)

function validate(){
    if(email.value == "" || password.value == ""){
        notifyText.forEach(text=>{
            text.style.visibility="visible"
        })
        email.style.border = "2px solid red";
        password.style.border = "2px solid red";
        return false;
    }else if(!regex_email.test(email.value)){
        email.style.border = "2px solid red";
        notifyText[0].style.visibility = "visible"
        return false;
    }else if(password.value.length < 8){
        password.style.border = "2px solid red";
        notifyText[1].style.visibility = "visible"
        return false;
    }else if(email.value != "abc124@gmail.com" && password.value !="12345678"){
        notify.style.display = "block"
    }else{
        email.style.border = "none";
        password.style.border = "none";
        notifyText.forEach(text=>{
            text.style.visibility="hidden"
        })
        return true;
    }   
}

btnLogin.addEventListener("click",validate)