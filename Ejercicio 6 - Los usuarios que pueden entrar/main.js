"use strict";
// Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?

const users = [{ name: "María", isPremium: false, pin: 2389 }, { name: "Lucía", isPremium: true, pin: 2384 }, { name: "Susana", isPremium: true, pin: 2837 }, { name: "Rocío", isPremium: false, pin: 5232 }, { name: "Inmaculada", isPremium: false, pin: 8998 }];

const usersEvenPins = users.filter(user => user.pin % 2 === 0);

console.log(usersEvenPins);

// y si quiero pintar en consola un array sólo con los nombres?
