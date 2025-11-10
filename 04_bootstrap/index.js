

//creamos la función login
function login() {

//capturo la info del imput del email
let email = document.getElementById("email").value;

//capturamosla info del password
let password = document.getElementById("password").value;

//imprimo el dato
 console.log(email);
 console.log(password);


 //verificamos si e email y el password son correcto
if (email === "pepe@gmail.com" && password === "1234") {
    alert("Te vas a loguear");
   //alert te vas a loguear");

   //redireccionamos la pagina perfil.html
   location.href = "perfil.html"
}else{

    alert("Email o Password incorrectos");
    location.href = "error.html"
    
}


 
}