var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Reverse a Doubly Linked List
  this.reverse = () => {
    let temp = null;
    let currentNode = this.head;

    if(!this.head) return null

    this.tail = currentNode;

    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev
    }
    if(temp != null) {
      this.head = temp.prev;
    }
  }
};
