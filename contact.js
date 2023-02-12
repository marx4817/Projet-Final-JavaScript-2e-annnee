let ere = false

const fullName = document.querySelector("input[name=name]");
const numbers= "0123456789"
fullName.onkeydown = (event) =>{
    var charCode =event.code
    if(numbers.includes(charCode.slice(-1))){
        var text = "Your fullname must not be contain numbers"
        event.target.parentNode.lastElementChild.innerText = text
        event.target.parentNode.lastElementChild.style.display ="block"
        event.preventDefault()  
    }else{
        event.target.parentNode.lastElementChild.style.display ="none"

    }
}

fullName.onchange = (event) =>{
    var len =fullName.value
    if(len.length< 5 || len.length >35){
        var text = "Your fullname must contain at least 5 characters and more 35 characters "
        event.target.parentNode.lastElementChild.innerText = text
        event.target.parentNode.lastElementChild.style.display ="block"
        event.target.parentNode.lastElementChild.style.color ="red"
        ere = true
    }else{
        event.target.parentNode.lastElementChild.style.display ="none"
        ere =false
    }
}

const subject = document.querySelector("input[name=first_name]");
subject.onchange = (event) =>{
    var len =subject.value
    if(len.length< 5 || len.length >15){
        var text = "Your subject must contain at least 5 characters and more 15 characters "
        event.target.parentNode.lastElementChild.innerText = text
        event.target.parentNode.lastElementChild.style.display ="block"
        event.target.parentNode.lastElementChild.style.color ="red"
        ere = true
    }else{
        event.target.parentNode.lastElementChild.style.display ="none"
        ere =false
    }
}


const inputs = document.querySelectorAll("input, textarea");


inputs.forEach((el) => {
    el.onblur = function(event){
        const req =el.nextElementSibling
        const b = event.target.value

        if(b == ""){
            req.textContent = "*Requierd feild";
            req.style.display = "block";
            event.target.style.borderColor = "#f44336";
            req.style.color = "#f44336";
            req.style.fontStyle = "italic";
            ere = true
        }
        
    }

    if(el.type == "radio"){

    }else if(el.type =="checkbox"){

    }else{
        el.onfocus = function(event){
            event.target.style.borderColor = "black";
            const req =el.nextElementSibling
            req.style.display = "none";
        }
    }
})

const email = document.getElementById("id_email")

email.oninput = (event) => {
    let val_email = email.value
    const email_er = email.parentNode.lastElementChild;
    
    email_er.style.color = "#f44336";
    email_er.style.fontStyle = "italic";
    email_er.style.display = "none"
    email_er.textContent = "This email is incorrect"

    if(val_email.includes("@")){
        if(val_email.includes(".")){
            email_er.style.display = "none"
            ere = ere = false
        }else{
            email_er.style.display = "block"
            ere = true
        }
    }else{
       email_er.style.display = "block"
       ere = true
    }
} 

const bouton = document.getElementById("btn");
const blokeBtn =document.getElementById("max1")
blokeBtn.onmouseenter = (event) => {
    const msn = document.querySelectorAll(" #form1 input[name=name], input[name=email], input[name=first_name], textarea[name=message]")
    let bool = false
    for(e of msn){
        
        if(e.value === ""){
            bool = true
            e.nextElementSibling.innerHTML= "This field is impty"
            e.nextElementSibling.style.display = "block"
            console.log(e.nextElementSibling)
        }else{
            const bool = false
        }
    }

    if(bool === true || ere === true){
        max1.type = "button"
        
    }else{
        max1.type = "submit"
        
    }
    
}

bouton.onsubmit = function(event){
    event.preventDefault();
    
    const data = new FormData(this);
    const mswn = document.querySelectorAll(" #form1 input, textarea[name=message]")
    mswn.forEach((el) => {
        el.value = ""
    })
}