"use strict";

class Node{ // >-An object with data and a pointer->
  constructor( entry ){
    this.entry = entry;
    this.next = null; // <-Single pointer, points to the next object in line-<
  };
}

class SingLinkList{ // >>-Singly Linked List->>
  constructor(){
    this.head = null; // <-List Head by which the list is referenced-<
    this.size = 0;
  };

  // >>=Primary Methods=<<
  //
  pin( value ) { // <<-Pins an entry to the beginning of the list-<<
    if ( this.head === null ){ // <--Iz the list is empty? |>
      this.head = new Node(value) // then the value is added as the head-<
    } else {
      let temp = this.head; // <--Stores the old head-<
      this.head = new Node(value); // <--Sets new node as the new head-<
      this.head.next = temp; // <--Points the new head to what is now its previous entry-<
    }
    this.size++;
  }

  extract( value ) {
    let currentNode = this.head;
    if ( currentNode.entry === value ){ // <--Is the value pointing to the head? |>
      this.head = currentNode.next; // |> then dereference it-<
      this.size--;
      return this;
    } else {
      let previousNode = currentNode;
      while ( currentNode.next ){
        if ( currentNode.data === value ){
          previousNode.next = currentNode.next;
          previousNode = currentNode;
          currentNode = currentNode.next;
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if ( currentNode.entry === value ){
        previousNode.next = null;
      }
      this.size--;
      return this;
    }
  }

  millet() { // <<-Removes the head and returns its contents-<<
    if ( this.head !== null ){
      const result = this.head.entry; // <--Stores the head-<
      this.head = this.head.next; // <--New head-<
      this.head.previous = null; // <--Dereference old head-<
      this.size--;
      return result;
    } else {
      console.error('There seems to be no list here')
      return -1;
    }
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
*/
  insertEntryAt( entry, index )
  { // >>-Inserts an Entry at the specified position Index->>
    if( index > 0 && index > this.size ){ // <<=Checks if Index is a valid position=<<
      console.error( "There aren't so many entries in the list." );
      return false;
    } else {
      let node = new Node( entry );
      let current = this.head;
      let previous;

      if( index === 0 ){ // <<=Add Entry to the first Index (making it the Head)=<<
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;
        while( it < index ){ // <<=Iterates to find the insertion point at Index=<<
          it++;
          previous = current;
          current = current.next;
        }
        node.next = current; // <<=Add Entry=<<
        previous.next = node;
      }

      this.size++;
    }
  };

  extractAt( index )
  { // >>-Remove an Entry from the specified Index->>
    if( index > this.size ) {
      console.error( "There aren't so many entries in the list." );
      return -1;
    } else {
      let it = 0;
      let current = this.head;
      let previous = current;

      if( index === 0 ) { // <-Delete the first Entry-<
        this.head = current.next; // <-Makes the next Entry the Head-<
      } else {
        while( it < index ) {
          it++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next; // <<=Remove the Entry=<<
      }

      this.size--;
      return current.entry; // <<=Returns the removed Entry=<<
    }
  };

  // >>=Helper Methods=<<
  indexOf( entry ) { // >>-Find Index of an Entry->>
    let count = 0;
    let current = this.head;

    while( current ){
      if( current.entry === entry )
        return count;
      count++;
      current = current.next;
    }
  };


  isEmpty() // <<-Check if list is empty-<<
  { return this.size === 0; };

  listSize()   // <<-List Size check-<<
  { return this.size; };

  listContents() { // <<-Returns List as an array-<<
    let current = this.head;
    let elements = [];
    while ( current ) {
      elements.push( current.entry );
      current = current.next;
    }
    return elements;
  };
}

module.exports = SinglyLinkedList;
