//Defino mis variables iniciales. El string y después, el array de strings. 
let palabraAComparar = "cactus";
let arrayPalabras = ['vainilla', 'cerezas', 'cedros', 'bugambilia', 'abeja', 'magnolia', 'mariposa', 'flores', 'lirio', 'rosa'];

//Creo la funcion que comparará la longitud de las palabras, recibiendo como parámetros mis dos variables anteriores.
//Con el método .filter() se iterará cada palabra para comparar su longitud a través del .length
function palabrasLargas(palabraAComparar, arrayPalabras){
	let resultado = arrayPalabras.filter((palabra) => palabra.length > palabraAComparar.length);
	return resultado;
}

//Guardo el resultado de las palabras más largas en un nuevo array para su uso posterior
let palabrasLargasResult = palabrasLargas(palabraAComparar, arrayPalabras);

//Imprimo el nuevo array del resultado para saber que está bien la información regresada
console.log(palabrasLargasResult);



/*
ESTE FUE MI CÓDIGO DESARROLLADO EN EL EJERCICIO EN VIVO

const miArray = ['palabra', 'manzana', 'árbol', 'función', 'bicicleta'];
const palabraCorta = "corto";

console.log(miArray);
console.log(palabraCorta);


// Función
function palabras(miArray, palabra){
    //const comparacionPalabras = miArray.filter((word) word.lenght => palabra.lenght);
}

console.log(palabras);

const imprimirPalabras = document.querySelector(".palabrasDOM");
imprimirPalabras.innerHTML = ("<li>comparacionPalabras</li>")


Retroalimentación de Uriel a mí como entrevistada

Me comentó que me desenvolví bien de inicio a fin, que casi lo acababa de tener más tiempo y que se ve que sé lo que estoy haciendo.
Que empecé bien desde lo más simple que es haciendo el fork y clonándolo con git, uniendo mis documentos y comentándolos

Comentarios de Uriel:
*Entrevistadora
	- Buena intro, dando los detalles de lo que vamos a hacer y los pasos
	- Preguntas relacionadas a la programacion y de por que estamos aqui
	- Pistas sobre el codigo en tiempo real pero sin decir demasiado
	- Buen feedback sobre la practica remarcando fortalezas y areas a mejorar

*Entrevistada
	- Actitud positiva al inicio de la sesion haciendo preguntas puntuales
	- Demuestra conocimiento sobre como clonar la repo y comenzar en VCS
	- Buenas practicas comenzando con los comentarios 
	- En JS excelente inicio al comenzar de manera fluida con el codigo
	- A pesar de tener errores continua para encontrar solucion
	- Se mantiene enfocada en el codigo si se le hacen preguntas
Explica su propio avance y hasta donde tiene conocimiento para mejorar posteriormente
*/