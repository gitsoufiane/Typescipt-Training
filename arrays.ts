const carMakers: string[] = ['ford', 'toyota'];
const dates: Date[] = [new Date(), new Date()];

const carsByMakers: string[][] = [['f150'], ['corolla']];

//help with inference when extracting values
const car = carMakers[1];
const car1 = carMakers.pop();

//prevent us from adding incompatible values to the array
carMakers.push('100');

// help with map, forEach, reduce functions
carMakers.map((car: string): string => car.toLowerCase());

//flexible - array with multiple different types
const importantDate: (Date | string)[] = [new Date()];
importantDate.push(new Date());
importantDate.push('2020/10/10');
importantDate.push(100);
