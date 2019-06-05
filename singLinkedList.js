"use strict";

class SingLinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
}

const node = {
  index: undefined,
  data: undefined,
  pointer: undefined,
};

const buildNode = function({ data }){
  const newNode = Object.create(node);
  newNode.index = setIndex({ list });
  newNode.data = data;
  newNode.pointer = setPointer({ list })
};

function makeNode({ node }){
  return Object.freeze({  })
}

function makeList(){
  return Object.freeze({
    node: makeNode(),
  })
}



