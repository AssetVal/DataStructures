'use strict';

const log = function(x) { console.log(x); };
const table = function(x) { console.table(x); };
const SingLinkedList = require('./singLinkedList');

const linksList = new SingLinkedList();

log(linksList.isEmpty());

linksList.pin('Sword');

table(linksList.listContents());

linksList.pin('Shield');
linksList.pin('Wand');
linksList.pin('Bottle');

log(linksList);
log(linksList.listContents());

log(linksList.isEmpty());
log(`The list is ${linksList.listSize()} items long.`);
table(linksList.listContents());

log(linksList.scry());
linksList.millet();
log(linksList.scry());

log(`Contains the Sword?: ${linksList.doesContain('Sword')}`);
log(`Contains the Bottle?: ${linksList.doesContain('Bottle')}`);
log(`Contains the Wand?: ${linksList.doesContain('Wand')}`);
log(`Wand is at index: ${linksList.indexOf('Wand')}`);
log(`The list is ${linksList.listSize()} items long.`);

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
