function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element){ // {1}
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
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Remove Elements from a Linked List by Index
  this.removeAt = index => {
    if (index < 0 || index >= length) return null;
    let current = head;
    if (index == 0) {
      head = null;
      length--;
      return current.element
    }
    let previous;
    let i = 0;
    while (i !== index) {
      previous = current;
      current = current.next;
      i++;
    }
    previous.next = current.next;
    length--
    return current.element
  }
}
