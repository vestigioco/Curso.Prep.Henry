// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
	// "Return" la string provista: str
	// Tu código:
	return str;
}
devolverString('hola');

function suma(x, y) {
	// "x" e "y" son números
	// Suma "x" e "y" juntos y devuelve el valor
	// Tu código:
	return x + y;
}
suma(5, 3);

function resta(x, y) {
	// Resta "y" de "x" y devuelve el valor
	// Tu código:
	return x - y;
}
resta(5, 3);

function multiplica(x, y) {
	// Multiplica "x" por "y" y devuelve el valor
	// Tu código:
	return x * y;
}
multiplica(5, 3);

function divide(x, y) {
	// Divide "x" entre "y" y devuelve el valor
	// Tu código:
	return x / y;
}
divide(5, 3);

function sonIguales(x, y) {
	// Devuelve "true" si "x" e "y" son iguales
	// De lo contrario, devuelve "false"
	// Tu código:
	return x == y;
}
sonIguales(5, 3);

function tienenMismaLongitud(str1, str2) {
	// Devuelve "true" si las dos strings tienen la misma longitud
	// De lo contrario, devuelve "false"
	// Tu código:
	if (str1.length == str2.length) {
		return true;
	}
	return false;
}
tienenMismaLongitud('largo', 'cortos');

function menosQueNoventa(num) {
	// Devuelve "true" si el argumento de la función "num" es menor que noventa
	// De lo contrario, devuelve "false"
	// Tu código:
	if (num < 90) {
		return true;
	}
	return false;
}
menosQueNoventa(80);

function mayorQueCincuenta(num) {
	// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
	// De lo contrario, devuelve "false"
	// Tu código:
	if (num > 50) {
		return true;
	}
	return false;
}
mayorQueCincuenta(80);

function obtenerResto(x, y) {
	// Obten el resto de la división de "x" entre "y"
	// Tu código:
	return x % y;
}
obtenerResto(10, 4);

function esPar(num) {
	// Devuelve "true" si "num" es par
	// De lo contrario, devuelve "false"
	// Tu código:
	var resto = num % 2;
	if (resto == 0) {
		return true;
	}
	return false;
}
esPar(3);

function esImpar(num) {
	// Devuelve "true" si "num" es impar
	// De lo contrario, devuelve "false"
	// Tu código:
	var resto = num % 2;
	if (resto != 0) {
		return true;
	}
	return false;
}
esImpar(3);

function elevarAlCuadrado(num) {
	// Devuelve el valor de "num" elevado al cuadrado
	// ojo: No es raiz cuadrada!
	// Tu código:
	return Math.pow(num, 2);
}
elevarAlCuadrado(3);

function elevarAlCubo(num) {
	// Devuelve el valor de "num" elevado al cubo
	// Tu código:
	return Math.pow(num, 3);
}
elevarAlCubo(3);

function elevar(num, exponent) {
	// Devuelve el valor de "num" elevado al exponente dado en "exponent"
	// Tu código:
	return Math.pow(num, exponent);
}
elevar(3, 5);

function redondearNumero(num) {
	// Redondea "num" al entero más próximo y devuélvelo
	// Tu código:
	return Math.round(num);
}
redondearNumero(2.456);

function redondearHaciaArriba(num) {
	// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
	// Tu código:
	return Math.ceil(num);
}
redondearHaciaArriba(2.456);

function numeroRandom() {
	//Generar un número al azar entre 0 y 1 y devolverlo
	//Pista: investigá qué hace el método Math.random()
	return Math.random();
}
numeroRandom();

function esPositivo(numero) {
	//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
	//Si el número es positivo, devolver ---> "Es positivo"
	//Si el número es negativo, devolver ---> "Es negativo"
	//Si el número es 0, devuelve false
	if (numero > 0) {
		return 'Es positivo';
	}
	if (numero < 0) {
		return 'Es negativo';
	}
	return false;
}
esPositivo(2);

function agregarSimboloExclamacion(str) {
	// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
	// Ejemplo: "hello world" pasaría a ser "hello world!"
	// Tu código:
	return `${str}!`;
}
agregarSimboloExclamacion('hello world');

function combinarNombres(nombre, apellido) {
	// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
	// Ejemplo: "Soy", "Henry" -> "Soy Henry"
	// Tu código:
	return `${nombre} ${apellido}`;
}
combinarNombres('Mauricio', 'Henao');

function obtenerSaludo(nombre) {
	// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
	// "Martin" -> "Hola Martin!"
	// Tu código:
	return `Hola ${nombre}!`;
}
obtenerSaludo('Mauricio');

function obtenerAreaRectangulo(alto, ancho) {
	// Retornar el area de un rectángulo teniendo su altura y ancho
	// Tu código:
	return ancho * alto;
}
obtenerAreaRectangulo(10, 4);

function retornarPerimetro(lado) {
	//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
	//Escribe tu código aquí
	return lado * 4;
}
retornarPerimetro(10);

function areaDelTriangulo(base, altura) {
	//Desarrolle una función que calcule el área de un triángulo.
	//Escribe tu código aquí
	return (base * altura) / 2;
}
areaDelTriangulo(10, 5);

function deEuroAdolar(euro) {
	//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
	//como parámetro un número de euros y calcule el cambio en dólares.
	//Escribe tu código aquí
	var dolar = 1.2;
	return euro * dolar;
}
deEuroAdolar(10);

function esVocal(letra) {
	//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
	//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
	//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
	//Escribe tu código aquí
	if (letra.length > 1) {
		return 'Dato incorrecto';
	}
	if (letra == 'a') {
		return 'Es vocal';
	}
	if (letra == 'e') {
		return 'Es vocal';
	}
	if (letra == 'i') {
		return 'Es vocal';
	}
	if (letra == 'o') {
		return 'Es vocal';
	}
	if (letra == 'u') {
		return 'Es vocal';
	}
}
esVocal('e');

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	nuevaString,
	nuevoNum,
	nuevoBool,
	nuevaResta,
	nuevaMultiplicacion,
	nuevoModulo,
	devolverString,
	tienenMismaLongitud,
	sonIguales,
	menosQueNoventa,
	mayorQueCincuenta,
	suma,
	resta,
	divide,
	multiplica,
	obtenerResto,
	esPar,
	esImpar,
	elevarAlCuadrado,
	elevarAlCubo,
	elevar,
	redondearNumero,
	redondearHaciaArriba,
	numeroRandom,
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
};
