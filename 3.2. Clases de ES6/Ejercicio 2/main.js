"use strict";
// Vamos a mejorar nuestra calculadora geométrica sencilla. En el programa definiremos la clase Square, que tendrá al menos:
// Un atributo para la longitud del lado (side) del cuadrado
// Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados - 4)
// Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
// Los métodos no recibirán parámetros, sino que cogerán los datos necesarios de los atributos de la instancia.
// Crearemos tres instancias: una con 1 de lado, otra con 3 y otra con 7. Llamaremos a los dos métodos en todas las instancias.

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side * this.side;
  }
}
const instance = new Square(1);
const instance3 = new Square(3);
const instance7 = new Square(7);

// instance.perimeter();
// instance3.perimeter();
// instance7.perimeter();
// instance.area();
// instance3.area();
// instance7.area();

console.log(instance.perimeter());
console.log(instance.area());

console.log(instance3.perimeter());
console.log(instance3.area());

console.log(instance7.perimeter());
console.log(instance7.area());
