"use strict";
// Vamos a mejorar crear una clase Person que recibe un nombre firstName y apellido lastName como parámetros de su constructor.
// También definiremos un getter fullName para obtener el nombre completo, que es una concatenación de nombre y apellido.
// Crearemos 2 instancias con distintos nombres para probar que funciona.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  paintFullName() {
    console.log(this.fullName); // accedemos como si fuera un atributo
  }
}

const user1 = new Person("Constanza", "Rava");
const user2 = new Person("Leo", "Marqués");
user1.paintFullName(); // Constanza Rava
user2.paintFullName(); // Leo Marqués
