/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  get(idx) {
    let current = this.head
    let count = 0
    while (current != null && count != idx) {
      count += 1
      current = current.next
    }
    return current
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {

    const idx = this.length - 1
    if (idx == 0) {
      let finalVal = this.head.val
      this.tail = null
      this.head = null
      this.length -= 1
      return finalVal
    }

    let finalVal = this.tail.val
    this.tail = this.get(idx - 1)
    this.length -= 1
    return finalVal
  }

  /** shift(): return & remove first item. */

  shift() {

    let value = this.head.val
    this.head = this.head.next
    this.length -= 1
    if (this.length < 2) {
      this.tail = this.head
    }
    return value

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    return this.get(idx).val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let select = this.get(idx)
    select.val = val
    return val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this.get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}



module.exports = LinkedList;
