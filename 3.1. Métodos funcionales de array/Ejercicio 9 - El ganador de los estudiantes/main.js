"use strict";

// Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son.

const runners = [{ name: "Gregory Goyle", time: 56, student: true }, { name: "Nymphadora Tonks", time: 9, student: false }, { name: "Luna Lovegood", time: 45, student: true }, { name: "Cedric Diggory", time: 28, student: true }, { name: "Cho Chang", time: 35, student: true }];

const biggerNumber = "";

const studentWonRunner = runners
  .filter(runner => runner.student === true)
  .reduce(function(runner) {
    if (runner.time > biggerNumber) {
      biggerNumber = runner.time;
    }
    return biggerNumber;
  });

console.log(studentWonRunner);

// no me sale la parte de reduce. hay que usar los cuatro parametros, porque necesitamos el indice
