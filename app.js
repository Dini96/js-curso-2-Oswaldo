/*
1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

4.  Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/
let contenido = document.querySelector("h1");
contenido.innerHTML = "Hora del desafío";


function botonConsola(){
    console.log("el botón fue clicado")
};

function botonPrompt(){
    console.log("se hace la pregunta")
    let respuestaUsuario = prompt("Escribe el nombre de una ciudad de Brasil");
    alert(`Estuve en ${respuestaUsuario} y me acorde de ti`);
};

function botonAlerta(){
    alert("Yo amo JS");
};