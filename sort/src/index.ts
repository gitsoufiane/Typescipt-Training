import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([50, 10, 3, -5, 0]);
const characterCollection = new CharacterCollection('Xaayb');
const linkedList = new LinkedList();

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