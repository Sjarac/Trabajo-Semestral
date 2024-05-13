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

    if(String(pass1).length >= 8){
        document.getElementById("pass1").style.border = "1px solid green"  
    } else{
        document.getElementById("pass1").style.border = "1px solid red"  
    }
    if(String(pass2) == String(pass1)){
        document.getElementById("pass2").style.border = "1px solid green"  
    }
    else{
        document.getElementById("pass2").style.border = "1px solid red"  
    }
     if(String(nombre) && String(email) &&String(pass1) && String(pass2)){

    }
$(document).ready(function Correo(email){
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let valido = expReg.test(email);
        
        if(valido!=true){
            alert("El correo electronico no es valido")
        }
        else{
            alert("El correo electronico es valido")
        }
        
    })
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