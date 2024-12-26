interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldHondaCity = {
  name: 'city',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
  Name: ${vehicle.name}
  Made in year: ${vehicle.year}
  Broken: ${vehicle.broken}  
  `);
};

printVehicle(oldHondaCity);
