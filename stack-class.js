class Stack {
  constructor() {
    let collection = [];
    this.print = () => {
      console.log(collection);
    };

    this.push = (val) => collection.push(val);

    this.pop = () => collection.pop();

    this.peek = () => collection[collection.length - 1];

    this.isEmpty = () => collection.length === 0;

    this.clear = () => (collection.length = 0);
  }
}

