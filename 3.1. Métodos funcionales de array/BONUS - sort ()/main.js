"use strict";
// Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN?

const users = [{ name: "María", isPremium: false, pin: 2389 }, { name: "Lucía", isPremium: true, pin: 2384 }, { name: "Susana", isPremium: true, pin: 2837 }, { name: "Rocío", isPremium: false, pin: 5232 }, { name: "Inmaculada", isPremium: false, pin: 8998 }];

const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
};
const sortedLanguages = users.sort(sortByName);

console.log(sortedLanguages);
