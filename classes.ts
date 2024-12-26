class Vehicle {
  constructor(public brand: string) {}

  protected honk(): void {
    console.log('Beep');
  }
}

const veh = new Vehicle('Mercedes');
console.log('Brand: ', veh.brand);

// Car class is inheriting Vehicle class
class Car extends Vehicle {
  constructor(public isEV: boolean, brand: string) {
    super(brand);
  }

  private drive(): void {
    console.log('Car Driving...');
  }

  public drivingCar(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(false, 'Buggati');
car.drivingCar();
console.log(`
  Car Brand: ${car.brand}
  Is EV: ${car.isEV}
`);
