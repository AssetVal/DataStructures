'use strict';

class Node{ // >-An object with data and a pointer->
  constructor(entry){
    this._entry = entry;
    this._next = null; // <-Single pointer, points to the next object in line-<
    Object.seal(this);
  }

  get entry(){ return this._entry; }

  set entry(value){ this._entry = value; }

  get next(){ return this._next; }

  set next(value){ this._next = value; }
}

class SingLinkList{ // >>-Singly Linked List->>
  constructor(){
    this._head = null; // <-List Head by which the list is referenced-<
    this._size = 0;
  }

  get head(){ return this._head; }

  set head(node){ this._head = node; }

  get size(){ return this._size; }

  set size(value){ this._size = value; }

  // >>=Primary Methods=<<
  //
  pin(value) { // <<-Pins an entry to the beginning of the list-<<
    if (this.head === null){ // <--Iz the list is empty? |>
      this.head = new Node(value); // then the value is added as the head-<
    } else {
      const temp = this.head; // <--Stores the old head-<
      this.head = new Node(value); // <--Sets new node as the new head-<
      this.head.next = temp; // <--Points the new head to what is now its previous entry-<
    }
    this.size += 1;
  }

  extract(value) {
    let currentNode = this.head;
    if (currentNode.entry === value){ // <--Is the value pointing to the head? |>
      this.head = currentNode.next; // |> then dereference it-<
      this.size -= 1;
      return this;
    }
    let previousNode = currentNode;
    while (currentNode.next){
      if (currentNode.data === value){
        previousNode.next = currentNode.next;
        previousNode = currentNode;
        currentNode = currentNode.next;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode.entry === value){
      previousNode.next = null;
    }
    this.size -= 1;
    return this;
  }

  millet() { // <<-Removes the head and returns its contents-<<
    if (this.head !== null){
      const result = this.head.entry; // <--Stores the head-<
      const newHead = this.head.next;
      console.log(this.head.next);
      console.log(newHead);
      // this.head = null;
      this.head = newHead; // <--New head-<
      this.head.next = null; // <--Dereference old head-<
      this.size -= 1;
      return result;
    }
    console.error('There seems to be no list here');
    return -1;
  }

  /*
   This block represents an old method
  xtract( entry )
  { // >>-Remove a specified Entry by name->>
    let current = this.head;
    let previous = null;

    while( current ){ // <-Iterates until...
      if( current.entry === entry ){ // ...It finds the specified value-<
        if( previous == null ){
          this.head = current.next;
        } else {
          previous.next = current.next; // <<=Removes Entry=<<
        }
        this.size--;
        return current.entry; // <<=Returns removed Entry=<<
      }
      previous = current;
      current = current.next;
    }
    return -1;
  };

  insert( entry ){ // >>-Adds Entry to the end of the list->>
    let node = new Node( entry );
    let current;

    if ( !this.head ){ // <<=If the list is empty, add this entry & make it the head=<<
      this.head = node;
    } else {
      current = this.head;
      while ( current.next ){ // <<=Iterates to the end of the list=<<
        current = current.next;
      }
      current.next = node; // <<=Adds Entry=<<
    }

    this.size += 1;
  };


   extractAt(index) { // >>-Remove an Entry from the specified Index->>
   if (index > this.size) {
   console.error("There aren't so many entries in the list.");
   return -1;
   }
   let it = 0,
   current = this.head,
   previous = current;

   if (index === 0) { // <-Delete the first Entry-<
   this.head = current.next; // <-Makes the next Entry the Head-<
   } else {
   while (it < index) {
   it += 1;
   previous = current;
   current = current.next;
   }
   previous.next = current.next; // <<=Remove the Entry=<<
   }

   this.size -= 1;
   return current.entry; // <<=Returns the removed Entry=<<
   }
*/
  insertEntryAt(entry, index) { // >>-Inserts an Entry at the specified position Index->>
    if (index > 0 && index > this.size){ // <<=Checks if Index is a valid position=<<
      console.error("There aren't so many entries in the list.");
      return false;
    }
    const node = new Node(entry);
    let current = this.head,
      previous;

    if (index === 0){ // <<=Add Entry to the first Index (making it the Head)=<<
      node.next = this.head;
      this.head = node;
    } else {
      current = this.head;
      let it = 0;
      while (it < index){ // <<=Iterates to find the insertion point at Index=<<
        it += 1;
        previous = current;
        current = current.next;
      }
      node.next = current; // <<=Add Entry=<<
      previous.next = node;
    }

    this.size += 1;
  }

  // >>=Helper Methods=<<
  //
  isEmpty() { return this.size === 0; } // <<-Check if list is empty-<<

  listSize() { return this.size; } // <<-List Size check-<<

  indexOf(entry) { // >>-Find Index of an Entry->>
    let count = 0,
      current = this.head;

    while (current){
      if (current.entry === entry) return count;
      count += 1;
      current = current.next;
    }
  }

  doesContain(value){ // >>-Checks if a given value is contained by the list->>
    let currentNode = this.head;
    while (currentNode.next){
      if (currentNode === value){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  listContents() { // <<-Returns List as an array-<<
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.entry);
      current = current.next;
    }
    return elements;
  }
}

module.exports = SingLinkList;
