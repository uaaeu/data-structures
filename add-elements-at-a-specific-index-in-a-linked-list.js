function LinkedList() {
  let length = 0;
  let head = null;

  function Node(element) {
    this.element = element;
    this.next = null;
  };

  this.size = () => length;

  this.head = () => head;

  this.add = (element) => {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Add Elements at a Specific Index in a Linked List
  this.addAt = (index, element) => {
    let node = new Node(element);
    if(index < 0 || index > length) return false;
    if(index === 0) {
      node.next = head;
      head = node;
      length++
    } else {
      let currentNode = head;
      let currentIndex = 0;
      let previousNode = null;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      if(currentIndex == index) {
        node.next = currentNode.next;
        previousNode.next = node;
        length++
      }
    }
  }
}
