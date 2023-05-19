// 1. Dados un array de 10 números, informar cuantos de ellos son positivos. (podemos utilizar de metodo filter() )
const numArreglo=[5,6,-7,8,9,-1]
const numeroPositivo= numArreglo.filter(numArreglo=>numArreglo>=0)
console.log(numeroPositivo)

//---------------------------------------------------------------------------------


// 2. Encontrar la mayor temperaruta de este arreglo: const temperaturas = [25, 30, 28, 32, 29, 27];

function temperaturaMayor(temperaturas){
    let mayorTemperatura=temperaturas[0];
    for (let i=1;i<temperaturas.length;i++){
        if (temperaturas[i]>mayorTemperatura){
            mayorTemperatura=temperaturas[i];
        }
    }
    return mayorTemperatura
}
const temperaturas = [25, 30, 28, 32, 29, 27];
const mayorTemperatura=temperaturaMayor(temperaturas);
console.log('la temperatura mayor es: ',mayorTemperatura)

//---------------------------------------------------------------------------------

// 3. Se pide ingresar una cantidad de personas. Por cada persona ingresar el año de nacimiento e informar el promedio de edad de aquellos que son millenials.
// const cantidadPersonas=prompt('ingrese el numero de personas que quiere ingresar: ')
// let sumaEdadMillenials=0;
// let cantidadMillenials=0
// for(let i=1;i<=cantidadPersonas;i++){
//     const añoNacimiento=parseInt(prompt(`Ingrese el año de nacimiento de la persona ${i}:`))
//     const edad= new Date().getFullYear()-añoNacimiento
//     if(añoNacimiento>=1981 && añoNacimiento<=1996){
//         sumaEdadMillenials+=edad
//         cantidadMillenials++
//     }
// }
// const promedioMillenials=cantidadMillenials>0 ? sumaEdadMillenials/cantidadMillenials:0
// console.log('la cantidad de millenials es: '+cantidadMillenials+' y el promedio de edad de los milenials es:'+promedioMillenials)

//---------------------------------------------------------------------------------

// 4. Algoritmo que lea los nombres y las edades de 2 alumnos, y que los datos se almacenen en dos arrays. En base a esos datos cargados, determinar el nombre de la alumna con la mayor edad del array.

// const nombres=[]
// const edades=[]
// let mayorEdad=0

// for (let i=0; i<2;i++){
//    const nombre= prompt("Digite tu nombre: "+(i+1))
//    const edad= parseInt(prompt("Digite tu edad: "+(i+1)))

//    nombres.push(nombre)
//    edades.push(edad)
// }

// for (let i=0;i<edades.length;i++){
//     if (edades[i]>edades[mayorEdad]){
//         mayorEdad=i;
//     }
// }
// const nombreMayor=nombres[mayorEdad]
// const edadMayor=edades[mayorEdad]

// console.log('el alumno con mayor edad es: '+ nombreMayor,'con: ',edadMayor,' años')

//---------------------------------------------------------------------------------
// 5. Sumar dos arreglos con longitud diferente arreglo1[4 , 5, 1 ,3 ] y arreglo[1, 2, 6] (En este ejercicio podemos utilizar el método fill(0))

const arreglo1 = [4, 5, 1, 3];
const arreglo2 = [1, 2, 6];

const longitudMaxima = Math.max(arreglo1.length, arreglo2.length);

const nuevoArreglo1 = arreglo1.concat(Array(longitudMaxima - arreglo1.length).fill(0));
const nuevoArreglo2 = arreglo2.concat(Array(longitudMaxima - arreglo2.length).fill(0));

const sumar = [];
for (let i = 0; i < longitudMaxima; i++) {
 const suma=(nuevoArreglo1[i] + nuevoArreglo2[i]);
 sumar.push(suma)
}

console.log(sumar); 