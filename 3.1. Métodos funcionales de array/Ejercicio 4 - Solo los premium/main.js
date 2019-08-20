"use strict";
// Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?

const users = [{ name: "María", isPremium: false }, { name: "Lucía", isPremium: true }, { name: "Susana", isPremium: true }, { name: "Rocío", isPremium: false }, { name: "Inmaculada", isPremium: false }];

const premiumUsers = users.filter(user => user.isPremium === true);

console.log(premiumUsers);
