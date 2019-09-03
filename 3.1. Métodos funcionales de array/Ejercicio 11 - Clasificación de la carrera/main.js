"use strict";

//  Volviendo a nuestra carrera de escobas, queremos tener el array del ejercicio 8 ordenado para poder tener una clasificación de la carrera: ¿nos ayudar a hacerlo usando sort?
// PISTA: la función que le pasamos a sort toma como parámetros 2 elementos del array, así que para acceder a una propiedad de un objeto en la función podemos hacerlo con el operador punto (a.time), como hemos hecho hasta ahora ;).

const runners = [{ name: "Gregory Goyle", time: 56 }, { name: "Nymphadora Tonks", time: 9 }, { name: "Luna Lovegood", time: 45 }, { name: "Cedric Diggory", time: 28 }, { name: "Cho Chang", time: 35 }];

runners.sort((a, b) => b.time - a.time);

console.log(runners);
