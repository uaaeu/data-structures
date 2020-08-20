class Queue {
  constructor() {
    let collection = [];
    this.print = () => {
      console.log(collection);
    };

    this.enqueue = (val) => collection.push(val);

    this.dequeue = () => collection.shift();

    this.front = () => collection[0];

    this.size = () => collection.length;

    this.isEmpty = () => collection.length === 0;
  }
}

