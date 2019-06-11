'use strict';

const log = function(x) { console.log(x); };
const table = function(x) { console.table(x); };
const SingLinkedList = require('./singLinkedList');
const DoubLinkList = require('./doubLinkList');

const linksList = ['Sword', 'Shield', 'Tunic', 'Net'];
const sList = new SingLinkedList();
const dList = new DoubLinkList();

log(dList.isEmpty());
log(sList.isEmpty());

linksList.forEach(item => dList.push(item));
table(dList.listContents());

dList.insertAfter('Sword', 'Potion');
table(dList.listContents());

dList.invert();
table(dList.listContents());

/*
sList.invert();
table(sList.listContents());

sList.insertAfter('Tunic', 'Bow');
table(sList.listContents());

linksList.forEach(item => sList.push(item));
table(sList.listContents());

sList.pop();
sList.pop();
table(sList.listContents());


 linksList.forEach(item => dList.push(item));

 table(dList.listContents());

 linksList.forEach(item => dList.shift(item));
 log(`Length - ${dList.listLength()}:`);

 table(dList.listContents());

 dList.millet();
 log(`Length - ${dList.listLength()}:`);
 table(dList.listContents());

 dList.pop();
 dList.pop();
 table(dList.listContents());

 log(`The shield is ${dList.findFromHead('Shield')} from the head`);
 log(`The other shield is at position ${dList.findFromTail('Shield')}`);
 log(dList.scry());
 log(dList.peek());

 >>= ~> single list test <~ =<<



sList.pin('Sword');

table(sList.listContents());

sList.pin('Shield');
sList.pin('Wand');
sList.pin('Bottle');

log(sList);
log(sList.listContents());

log(sList.isEmpty());
log(`The list is ${sList.listSize()} items long.`);
table(sList.listContents());

log(sList.scry());
sList.millet();
log(sList.scry());

log(`Contains the Sword?: ${sList.doesContain('Sword')}`);
log(`Contains the Bottle?: ${sList.doesContain('Bottle')}`);
log(`Contains the Wand?: ${sList.doesContain('Wand')}`);
log(`Wand is at index: ${sList.indexOf('Wand')}`);
log(`The list is ${sList.listSize()} items long.`);

linksList.extract('Shield');
log(`Contains the Shield?: ${linksList.doesContain('Shield')}`);
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

linksList.insertEntryAt('Potion', 1);
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());
log(linksList);
*/
