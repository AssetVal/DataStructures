'use strict';

class Node {
  constructor(value){
    this._entry = entry;
    this._next = null;
    this._previous = null;
    Object.seal(this);
  }

  get entry(){ return this._entry; }

  set entry(value){ this._entry = value; }

  get next(){ return this._next; }

  set next(value){ this._next = value; }

  get previous(){ return this._previous; }

  set previous(value){ this._previous = value; }
}

class DoubLinkList{
  constructor(){
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get head(){ return this._head; }

  set head(value){ this._head = value; }

  get tail(){ return this._tail; }

  set tail(value){ this._tail = value; }

  get length(){ return this._length; }

  set length(value){ this._length = value; }

  // >>=Primary Methods=<<
  //
  shift(value) {
    if (this.head === null){
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const newHead = new Node(value);
      newHead.next = this.head;
      this.head.previous = newHead;
      this.head = newHead;
    }
    this.length += 1;
  }

  push(value) {
    if (this.tail === null){
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      const newTail = new Node(value);

    }
  }
}
