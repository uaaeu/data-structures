// Create a Doubly Linked List
function Node(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = e => {
    let node = new Node(e);
    if(!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  this.remove = e => {
    let nextNode;
    let prevNode;
    if(!this.length) return null;
    if(e === this.head.data) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--
    } else if(e === this.tail.data) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--
    } else {
      let currentNode = this.head.next;
      while (currentNode !== null) {
        if(currentNode.data === e) {
          prevNode = currentNode.prev;
          nextNode = currentNode.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
        currentNode = currentNode.next;
        this.length--
      }
    }
  }
};
