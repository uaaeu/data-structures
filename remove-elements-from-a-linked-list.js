function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  };

  this.size = () => length;

  this.head = () => head;

  this.add = function(element){
    const node = new Node(element);
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
  // Remove Elements from a Linked List
  this.remove = function(element){

    if(head.element === element) {
      head = head.next
      return length--
    }
    let previous = head
    while(previous) {
      let current = previous.next
      if(current) {
        if(current.element === element) {
          previous.next = current.next;
          return length--
        }
      }
      previous = current;
    }
  };
}
