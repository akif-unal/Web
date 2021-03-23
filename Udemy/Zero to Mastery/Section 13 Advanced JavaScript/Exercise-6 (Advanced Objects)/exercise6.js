//Evaluate these:
//#1
// * [2] === [2]  //answer: false
// * {} === {}   //answer: false

//#2 what is the value of property a for each object.
//  const object1 = { a: 5 };
//  const object2 = object1;
//  const object3 = object2;
//  const object4 = { a: 5};
//  object1.a = 4;
// * answer: object1,2,3 = number 4
// * answer: object4 = number 5
//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

"use strict";
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound() {
    console.log(`Moooo: ${this.name}, ${this.type}, ${this.color}`);
  }
}

class Dog extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  bark() {
    console.log(
      `Barking: I'm ${this.name} and I'm a ${this.color} ${this.type}`
    );
  }
}

const cow = new Mamal("Kınalı", "Sığır", "Sarı");
const dog = new Dog("Bıdıllı", "Poodle", "Siyah");
cow.sound();
dog.bark();
