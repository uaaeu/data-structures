function PriorityQueue() {
  this.collection = [];
  this.printCollection = () => {
    console.log(this.collection);
  };

  this.enqueue = (newitem) => {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    let found_index = this.collection.findIndex(
      (item) => newitem[1] >= item[1]
    );

    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = () => {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = () => this.collection.length;

  this.front = () => this.collection[0][0];

  this.isEmpty = () => (this.size() > 0 ? false : true);
}
