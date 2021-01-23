import { Sorter } from './Sorter';
export class NumberCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }
  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
  swap(i: number, j: number): void {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }
}
