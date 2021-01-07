import { Sorter } from './Sorter';
class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  constructor() {
    super();
  }
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('index our of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('index out of bounds');
  }

  compare(i: number, j: number): boolean {
    if (!this.head) {
      throw new Error('list is empty');
    }
    return this.at(i).data > this.at(j).data;
  }

  swap(i: number, j: number): void {
    const leftnode = this.at(i);
    const rightnode = this.at(j);
    const tmp = leftnode.data;
    leftnode.data = rightnode.data;
    rightnode.data = tmp;
  }
  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
