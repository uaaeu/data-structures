var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

// Work with Nodes in a Linked List
Kitten.next = Puppy;

const Cat = new Node('Cat');
const Dog = new Node('Dog');

Puppy.next = Cat;
Cat.next = Dog;

// test your code
console.log(Kitten.next);
