"use strict";
// Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
// Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
// Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?

const users = [{ name: "María", isPremium: false }, { name: "Lucía", isPremium: true }, { name: "Susana", isPremium: true }, { name: "Rocío", isPremium: false }, { name: "Inmaculada", isPremium: false }];

const premiumHelloUsers = users.map(function(user) {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida ${user.name}.`;
  }
});

console.log(premiumHelloUsers);
