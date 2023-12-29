/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var increment = array.map(num => {return num+1});
   return increment;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var arrego =  palabras.join(' ');
  
   return arrego;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento) == true ){
      return true;
   }else{
      return false ;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0 
   arrayOfNums.forEach(element => {
      suma+= element
   });
return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0 ,  contador = 0 , promedio = 0 ;
   resultadosTest.forEach(numero => {
        suma += numero;
        contador = numero++
        promedio = suma / contador;
    });
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numero = arrayOfNums[0];
   for (let i = 0; i < arrayOfNums.length; i++) {
      
      if (arrayOfNums[i] > numero) {
         numero = arrayOfNums[i];
      }
      
      
   }
   return numero;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length < 1){
      return 0; 
   }else if (arguments.length === 1 ){
      return arguments.length;
   }
   var multiplicar = 1 ;
   for (let i = 0; i < arguments.length; i++) {
      const elemento= arguments[i];
      if (!isNaN(elemento)){
         multiplicar*= elemento
      }
   }return multiplicar;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let numero =  0;
   let contador = 0 ; 
   for (let i = 0; i < array.length; i++) {
      numero = array[i]
      if (numero > 18 ){
         contador++;
      }
      
   }return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana";
      case 2: 
       return "Es dia laboral";
       case 3:
         return "Es dia laboral";
      case 4: 
       return "Es dia laboral";
       case 5:
         return "Es dia laboral";
      case 6: 
       return "Es dia laboral";
      case 7:
         return "Es fin de semana";
       default:
         "no es un dia de la semana"
         break;
   }
  
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = num.toString();
   if (numero.charAt(0) === "9" ){
      return true;
   }else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      let numero = array[i]
      if (numero === array[i+1]){
         return true;
      }else{
         return false;
      }
      
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let resultado 
   for (let i = 0; i < array.length; i++) {
      resultado = array.filter((meses)=> meses === "Enero" || meses === "Marzo" || meses === "Noviembre" );
         if (array.includes("Enero","Marzo","Noviembre" ))  {
            return resultado;
         }else{
            return "No se encontraron los meses pedidos";
         } 
   } 
   
} 


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tabla= 6;
   let arreglo=[];
     for (let i = 0; i <= 10; i++) {
        arreglo.push(tabla * i);
      
      }
      
      return arreglo;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let resultado=[];
   for (let i = 0; i < array.length; i++) {
         if (array[i] > 100 ){
            resultado.push(array[i]);
         }
      };
      return resultado;
   }
   


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo = [];
   var suma = num;
   
   for (var i = 0; i < 10; i++) {
     suma += 2;
     if (suma === i) break;
     else {
      arreglo.push(suma);
     }
   }
   if (i < 10) {
     return "Se interrumpió la ejecución";
   } else {
     return arreglo;
   }
 }


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arreglo= [];
   let suma = num 
   for (let i = 0; i < 10 ; i++) {
      if (i=== 5) {
         continue;
      }else{
         suma += 2;
         arreglo.push(suma);
      }
      
      
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
