//interface: create a new type describing the property name and value type of an object
interface Car {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return this.name;
  },
};

const printVehicle = (car: Car): void => {
  console.log(`${car.name} - ${car.year} - ${car.broken} `);
  console.log(car.summary());
};
printVehicle(oldCivic);
