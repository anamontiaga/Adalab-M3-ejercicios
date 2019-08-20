"use strict";
// Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
// const pins = [2389, 2384, 2837, 5232, 8998];
// De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter(pin => pin % 2 === 0);

console.log(evenPins);
