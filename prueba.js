debugger
let usuario, clave, saldo

usuario ="vale";
clave =1234;
saldo  ="$200"

usuario = prompt("Ingrese su usuario");
clave = parseInt(prompt("Ingrese su clave"));

if (usuario=="vale" && clave=="1234"){
    alert("Tienes $200 en tu cuenta");
    document.write(`${usuario} tienes ${saldo} dólares en tu cuenta`);
}else if (usuario!=="vale" && clave!=="1234"){
    alert("Tu usuario y clave no coinciden, tienes 2 intentos más");
    usuario = prompt("Ingrese su usuario");
    clave = parseInt(prompt("Ingrese su clave"));
    if (usuario!=="vale" && clave!=="1234"){
    alert("Tu usuario y clave no coinciden, te queda 1 intento");    
    }else{
    document.write(`${usuario} tienes ${saldo} dólares en tu cuenta`);  
    }
}else{
    alert ("Has bloqueado tu cuenta, te quedan 0 intentos")
}