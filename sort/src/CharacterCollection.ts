import { Sorter } from './Sorter';
export class CharacterCollection extends Sorter {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }
  swap(i: number, j: number): void {
    const characters = this.data.split('');
    const tmp = characters[i];
    characters[i] = characters[j];
    characters[j] = tmp;
    this.data = characters.join('');
  }
}
