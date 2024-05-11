$(document).ready(function() {
    let nombre = $("#nombre");
    let email = $("#email");
    let pass1 = $("#pass1");
    let pass2 = $("#pass2");

    if(String(nombre).length >= 10){
        document.getElementById("nombre").style.border = "1px solid green"  
    }
    else{
        document.getElementById("nombre").style.border = "1px solid red"  
    }
    if(String(pass1).length > 8){
        document.getElementById("pass1").style.border = "1px solid green"  
        if(String(pass2) == String(pass1)){
            document.getElementById("pass2").style.border = "1px solid green"  
        }
        else{
            document.getElementById("pass2").style.border = "1px solid red"  
        }
    } else{
        document.getElementById("pass1").style.border = "1px solid red"  
    }
    $("#reg").click(function(){
        location.href = "http://127.0.0.1:3000/index.html";
        
    })
    $("#validar").click(function (){
        console.log(nombre.val());
        console.log(email.val());
        console.log(pass1.val());
        console.log(pass2.val());
    })
})