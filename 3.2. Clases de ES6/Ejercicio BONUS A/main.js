"use strict";
// Vamos a mejorar ¡aún más! nuestra calculadora geométrica sencilla. En el programa definiremos la clase Polygon, Square y Triangle para polígonos regulares (todos sus lados miden lo mismo). Ya os imagináis por dónde van los tiros: las clases Square y Triangle serán subclases de Polygon. La clase Polygon tendrá, al menos:
// Un atributo para el número de lados (numberOfSides)
// Dos atributos más: para la longitud de la base (base) y de la altura (height)
// Un método para calcular el perímetro (perimeter) (multiplicar la longitud del lado base por el número de lados)
// Un método para calcular el área (area) (multiplicar base por altura)
// La subclase Square tendrá:
// Un atributo lado (side) igual a la base
// Un constructor que recibirá exclusivamente la longitud del lado
// La subclase Triangle tendrá:
// Un constructor que recibirá base y altura
// Un método area() que sobrescibirá al de la clase base. Devolverá la mitad de lo que devuelva llamar al área de la clase base (super.area() / 2)
// Crearemos dos instancias: un cuadrado de 4 de lado y un triángulo de 4 de base y 3 de altura. Llamaremos a los dos métodos en todas las instancias.

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

instance.perimeter();
instance3.perimeter();
instance7.perimeter();
instance.area();
instance3.area();
instance7.area();

console.log(instance.perimeter());
console.log(instance.area());

console.log(instance3.perimeter());
console.log(instance3.area());

console.log(instance7.perimeter());
console.log(instance7.area());
