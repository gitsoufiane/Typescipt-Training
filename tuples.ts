const drink = {
  color: 'red',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number]; //Type Alias
const pepsi: Drink = ['red', true, 40];
pepsi[0] = 40; //Error
