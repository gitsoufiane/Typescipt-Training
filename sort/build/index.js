"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollection = new NumberCollection_1.NumberCollection([50, 10, 3, -5, 0]);
var characterCollection = new CharacterCollection_1.CharacterCollection('Xaayb');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
numberCollection.sort();
characterCollection.sort();
linkedList.sort();
console.log(numberCollection.data);
console.log(characterCollection.data);
linkedList.print();
