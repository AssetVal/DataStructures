'use strict';

const log = function(x) { console.log(x); };
const table = function(x) { console.table(x); };
const SingLinkedList = require('./singLinkedList');

const linksList = new SingLinkedList();

log(linksList.isEmpty());

linksList.pin('Wooden Sword');

table(linksList.listContents());

linksList.pin('Shield');
linksList.pin('Wand');
linksList.pin('Bottle');

log(linksList);

log(linksList.isEmpty());
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

linksList.millet();
log(`Contains the Wooden Sword?: ${linksList.doesContain('Wooden Sword')}`);
log(`The list is ${linksList.listSize()} items long.`);

linksList.extract('Bottle');
log(`Contains the Bottle?: ${linksList.doesContain('Bottle')}`);
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

linksList.insertEntryAt('Potion', 1);
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());
log(linksList);
