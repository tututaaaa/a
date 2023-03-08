//------------FORMAS DE ENLAZAR EL ARCHIVO JS------------
//en linea poniendo dentro de una etiqueta html
//abriendo la etiqueta <script type="text/javascript"></script> y dentro poner el código
//con un archivo aparte y añadirlo con <script src="ubicación"></script>
//con un require esta forma se usa mas adelante con por ej note.js

//------------------VARIABLES--------------------------------
//
//tipos de variables en javascript no se necesita declarar tipos de variables
//poner nombre y = valor de esta forma la variable automáticamente sera var, 
var//la variable var no se recomienda usar porque tiene  un alcance (scope) en todo el programa
let//esta variable tiene un alcance (scope) en el bloque donde se declaro es la mas recomendable
const A =3//esta variable no cambia en el tiempo

//-----------ARREGLOS----------------
//
//para definir un arreglo es igual que una variable pero hay que poner las variables entre [y separar con ,]
//otra forma es poner el nombre de la variable por ej 
//let pc={
//  nombre:"a",
//  numero: 3
//      
//  } 
//  DE ESTA FORMA NOMBRAMOS A LOS ESPACIOS DE MEMORIA EN VES DE PONER 0.1,2,ETC
// PARA LLAMAR A ESTAS VARIABLES PC["nombre"]
// .push(). El método push() es usado para agregar un elemento al final de un arreglo.
// .unshift() que nos permite agregar elementos al principio de nuestro arreglo.
// concat(), por otro lado, devolverá un arreglo completamente nuevo. de la union de dos arreglos
//----------------ALERTAS-------------------------------
//
//alert() para que salga una alerta
//prompt(texto) para que el usuario ponga algo


//--------------------TIPOS DE ERRORES-----------------
//
//undefined cuando una variable no tiene  valor
//null cuando una variable esta vacía
//NaN (not a number) cuando intentas hacer una operación  con una variable que no tiene un numero 

//-----------ESCRIBIR EN EL DOCUMENTO-----------
//document.write(var)

//-------PARA OPERACIONES--------
//
// HAY DOS FORMAS
// variable += 5 para sumar 5 a la variable ()
// asi con todas las operaciones
// y la otra es variable + variable
// dos == comparación de datos pero no de tipo de variable
// tres === comparación de datos y de tipo de variable

//-----------CONTINUE Y BREAK------------
//
//CONTINUE sirve para que cuando lea continue saltara toda la parte del código por ej 
//
//for let a = 1 4{
//if(condición){
//  continue
// }
//}
//EL CONTINUE HARÁ QUE SE SALTE TODO LO SIGUIENTE A EL Y VOLVERÁ AL BUCLE
//EL BREAK ARA QUE ROMPA EL BUCLE

//---------TEXTO Y CONCATENAR------------------------
// HAY VARIAS FORMAS DE ESCRIBIR TEXTO CON "A" 'A' `AAA`
// SI PONEMOS " " NO PODEMOS PONER COMILLAS DENTRO DE LA COMILLAS PERO SI LAS OTRAS OCURRE LO MISMO CON LAS OTRAS
//PARA CONCATENAR UNA VARIABLE PODEMOS PONER
// "AAA" + VARIABLE O  `TEXTO ${VARIABLE}  "TEXTO" ` para la forma ${} hay que usar backticks ``
// LAS ETIQUETAS ESCRITAS EN TEXTOS SE INTERPRETAN COMO CÓDIGO HTML ASI QUE PODES HACER <BR> SOLO SI ESTA ENTRE BACKTICKS ``
// Ctrl + Alt + } backticks

//---------CONDICIONALES Y BUCLES-------------------
//
//CONDICIONALES
// IF(CONDICIÓN){},ELSE , ELSEIF(CONDICIÓN){} 
//
//BUCLES
//FOR (DECLARACIÓN DE VARIABLE NO ES OBLIGATORIO;CONDICIÓN;CON QUE PASO POR EJ i++){}
//
//WHILE (CONDICIÓN){}
//DO WHILE (CONDICIÓN)
//
//FOR IN (VARIABLE COMO EN UN FOR in array)devuelve el indice de un array
//FOR OF (VARIABLE COMO EN UN FOR OF array)devuelve el valor de un array
//
//FOR IN Y OF PUEDE TENER LA FUNCIONALIDAD DE RECORRER ARRAYS DENTRO DE ARRAYS
//
//LABEL SIRVE PARA DARLE NOMBRES A BUCLES Y DESPUÉS PODER USAR (BREAK NOMBRE)
//PARA DAR UN NOMBRE POR EJ forNombre:

//--------------FUNCIONES---------------------- 
//
//Para crear una función se debe poner
//function nombre(){
//  instrucciones   
//}
//return la función no tiene ningún valor asignado como variable al poner return
//le decimos el valor de retorno de la variable, el return finaliza la función
//para pasar valores a funciones function nombre(a,b), las variable solo existen en la función
//otra forma de crear funciones por ej const saludar=function(nombre){}
//const saludar = (nombre)=> instrucción

//parseInt para pasar de texto a numero

//----------POO-------------------------
// class nombre { para crear una clase, que contenga objetos
// constructor(parámetros){  
//     this.nombre=nombre del parámetro del constructor
//     }
// }
// Para crear un objeto para nuestra clase poner:
// const nombre = new nombreDeLaClase(parámetros de constructor) (recomendable usar const)
// para acceder a una propiedad de un objeto poner     nombre.propiedad

// MÉTODOS son como funciones pero dentro de una clase LOS MÉTODOS NO PUEDEN SER FLECHA 
// PARA CREAR EL MÉTODO nombre(){}
// para llamar al método poner nombreDelObjeto.nombreDelMétodo() 


// ABSTRACCIÓN simplificar los métodos y las clases en general
// MODULAR resolver problemas en pequeños pedacitos
// ENCAPSULAR hacer que el usuario no pueda acceder a los datos
// POLIMORFISMO que un objeto se comporte distinto dependiendo de sus propiedades 

// HERENCIA hacer que una clase tenga lo mismo  que otra pero agregar cosas nuevos por ej

// class nombreDeLaNuevaClase extends nombreDeLaClaseQueSeQuiereHeredar {} ESTO PARA LA CLASE

// constructor(nombresMasLosNuevos){                                ESTO PARA EL CONSTRUCTOR
//     super(nombresDelConstructorAHeredar)
// }

// setter modificar un valor de una propiedad de una clase se usa:
// set nombre(variable){
//     this.nombre=variable
//     Y PARA CAMBIARLO PONER
//     nombreDeLaClase.nombreMétodo=valor
// }
// getter get obtener el valor de una propiedad

// static poder llamar a un método sin tener el objeto

//---------Métodos de cadenas--------------------
// nombre.concat("texto" o variable) junta dos o mas cadenas y retorna una nueva
// nombre.startsWith("texto" o variable ) comprueba si una cadena de texto comienza con otra variable o texto,retorna true o false
// nombre,endWith("texto" o variable) comprueba si una cadena de texto termina con otra variable o texto,retorna true o false
// nombre.includes("texto" o variable) comprueba si una cadena de texto contiene otra variable o texto, retorna true o false
// nombre.indexOf("texto" o variable) comprueba en que posición empieza la variable o texto y devuelve la posición de la primera letra de esa palabra, si devuelve -1 no existe
// nombre.lastIndexOf("texto" o variable) lo mismo que indexOf pero de atrás para delante
// nombre.padStart(cantidadDeCaracteres,"texto" o variable) agrega al principio el texto o variable a la cadena original hasta completar la cantidadDeCaracteres
// nombre.padEnd(cantidadDeCaracteres,"texto" o variable) lo mismo que padStart pero agrega el texto al final
// nombre.repeat(cantidadDeRepeticiones) repite el string la cantidadDeRepeticiones

// nombre.split("texto" o variable) divide la cadena de texto en un array tomando como separador el texto o variable puesta, devuelve un array
// nombre.substring((variable, o valor numérico),(variable, o valor numérico)) devuelve una cadena que este entre lo valores puesto
// nombre.toLowerCase() devuelve la cadena en minúsculas
// nombre.toUpperCase() devuelve la cadena en mayúsculas
// nombre.toString() devuelve la cadena pero en texto
// nombre.parseInt() devuelve la cadena en numero
// nombre.trim() elimina los espacios del principio y del final
// nombre.trimEnd() elimina los espacios del final
// nombre.trimStart() elimina los espacios del principio

// nombre.length devuelve la cantidad de caracteres de un string

//---------Métodos de arrays--------------------
//----Modifican el array original-----------
// nombre.pop() elimina el ultimo elemento del array y lo muestra/devuelve
// nombre.shift() elimina el primer elemento del array y lo muestra/devuelve
// nombre.push("texto" o variable) agrega un nuevo elemento al final del array y devuelve cuantos elementos tiene ahora el array
// nombre.reverse() invierte el orden del array
// nombre.unshift("texto" o variable) lo mismo que push pero agrega los elementos al principio
// nombre.sort() ordena cada elemento del array de forma numérica o alfabéticamente
// nombre.splice(num1,num2,"texto" o variables) num1:selector de donde empezar a agregar o eliminar elementos. num2, hasta donde eliminar, si no se desea eliminar nada poner 0, el texto o variable es lo que se quiere agregar a partir de num1
//-----------Devuelven un nuevo array-----------
// nombre.join("texto" o variable) transforma el array en una cadena de texto, en el texto o variable se pone con que se desea separar cada elemento del array
// nombre.slice(num1,num2) muestra los elementos que estén entre num1 y num2
//-----------Métodos de bucle en arrays-------
// nombre.forEach() devuelve cada elemento del array
// nombre.filter() lo mismo que forEach pero ademas se pueden poner filtros de los elementos que recorre, por ej que solo muestre los que tengan mas de 5 letras

//------------Funciones matemáticas---------------
// Math.sqrt(número o variable) devuelve la raíz cuadrada positiva del numero o variable
// Math.cbrt(número o variable) devuelve la raíz cúbica positiva del numero o variable
// Math.max(num1,num2,num3,etc) devuelve el número máximo de los ingresados
// Math.min(num1,num2,num3,etc) devuelve el número mínimo de los ingresados
// Math.fround() devuelve la representación mas simple cercana al numero,(devuelve el número con 15 decimales)
// Math.random() devuelve un número aleatorio entre 0 y 1
// Math.round() redondea un número
// Math.floor() devuelve solo la parte entera de un número
// Math.trunc() trunca un número
// PI numero
// SQRT1_2 raíz cuadrada de 1/2
// SQRT2 raíz cuadrada de 2
// E número de Euler
// LN logaritmo natural
// LN2 logaritmo natural de 2
// LOG2E logaritmo de e con base 2

//-------------Console----------------
//console.assert() si la expresión que este dentro de los paréntesis es falsa, muestra un error
//console.clear() limpia la consola
//console.error() muestra un mensaje de error con el texto dentro de los paréntesis
//console.info() es un mensaje de información, a diferencia de log que es de depuración
//console.table(array o objeto) muestra una tabla con su indice y su valor
//console.warn() igual que error solo que muestra un mensaje de advertencia
//console.dir() despliega una lista con info de la variable
//console.count() cada vez que se pone este comando suma un numero, que es mostrado por consola (contador)
//console.countReset() para reset el contador
//console.group(nombre) para crear grupos con instrucciones
//console.groupEnd() volver en un nivel de grupo
//console,groupCollapsed() crear un grupo pero que este cerrado
//console.time(nombre) inicia un contador en ms
//console.timeLog(nombre) muestra el tiempo transcurrido
//console.timeEnd(nombre) finalizar el contador
//se puede modificar visualmente los mensajes en consola con: console.log("%c texto ","color:red","etc")
sadsad