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

function botonSuma(){
    let respuestaUsuario1 = parseInt(prompt("elige un número"));
    let respuestaUsuario2 = parseInt(prompt("elige un segundo número"));
    alert(`la suma de ambos dígitos es: ${respuestaUsuario1+respuestaUsuario2}`);
};


/*
practica sobre funciones

Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludo(){
    console.log("¡hola mundo!")
};
saludo();


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function nombreSaludo(nombre){
    console.log(`¡Hola, ${nombre}!`);
};

nombreSaludo("Oswaldo");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
    return numero*2;
};
console.log(dobleNumero(2));

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioTresNumeros(x1,x2,x3){
    return `el promedio es ${(x1+x2+x3)/3}`;
};
console.log(promedioTresNumeros(4,5,6));

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function evaluaMayor(x,y){
    return Math.max(x,y);
};
console.log(evaluaMayor(4,10));

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(x){
    return x*x;
};
console.log(cuadrado(10));
