function LinkedList() {
  let length = 0;
  let head = null;

  function Node (element) { // {1}
    this.element = element;
    this.next = null;
  };

  this.size = () => length;

  this.head = () => head;

  this.add = (element) => {
    let node = new Node(element);
    if(head === null){
        head = node;
    } else {
      let currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = (element) => {
    let currentNode = head;
    let previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Search within a Linked List
  this.isEmpty = () => {
    return length > 0 ? false : true
  }

  this.indexOf = (element) => {
    if (head === null) return -1
    let current = head;
    let index = 0;
    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }
    if (current.element !== element && current.next === null) {
      return -1
    }
    return index;
  }

  this.elementAt = (index) => {
    if (head === null) return undefined;
    let current = head; 
    let currentIndex = 0;
    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }
    if (currentIndex !== index && current.next === null) {
      return undefined;
    }
    return current.element
  }
}
