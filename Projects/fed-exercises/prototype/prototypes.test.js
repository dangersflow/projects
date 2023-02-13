////// STUDENTS: DO NOT MODIFY THIS FILE //////
var {
  Person,
  Car,
  Baby
} = require("./prototypes.js");
  
describe("Instances of Person", () => {
  let shaggy;

  const foods = ['Scooby Snacks', 'Pizza', 'Burger', 'Ice Cream', 'Sandwich'];

  beforeEach(() => {
    shaggy = new Person("Shaggy", 17);
  });

  it("initialize with the given name", () => {
    expect(shaggy.name).toBe("Shaggy");
  });

  it("initialize with the given age", () => {
    expect(shaggy.age).toBe(17);
  });

  it("initialize with an empty stomach", () => {
    expect(shaggy.stomach).toEqual([])
  });

  it("get eat, poop and toString methods from their prototype", () => {
    expect(shaggy.hasOwnProperty('eat')).toBe(false);
    expect(Object.getPrototypeOf(shaggy).eat).toBeDefined();

    expect(shaggy.hasOwnProperty('poop')).toBe(false);
    expect(Object.getPrototypeOf(shaggy).poop).toBeDefined();

    expect(shaggy.hasOwnProperty('toString')).toBe(false);
    expect(Object.getPrototypeOf(shaggy).toString).toBeDefined();
  });

  it("can eat up to 10 foods", () => {
    foods.forEach(item => shaggy.eat(item));
    foods.forEach(item => expect(shaggy.stomach).toContain(item));
  });

  it("can eat no more than 5 foods", () => {
    foods.forEach(item => shaggy.eat(item));
    shaggy.eat('Lasagna');
    expect(shaggy.stomach).not.toContain('Lasagna');
  });

  it("can poop to empty stomach", () => {
    foods.forEach(item => shaggy.eat(item));
    shaggy.poop();
    expect(shaggy.stomach.length).toBe(0);
  });

  it("can state name and age", () => {
    const str = shaggy.toString();
    expect(str).toMatch(/Shaggy/);
    expect(str).toMatch(/17/);
  });
});

describe("Instances of Car", () => {
  let batmobile;

  beforeEach(() => {
    batmobile = new Car("BatMobile", 20);
  });

  it("initialize with the given model", () => {
    expect(batmobile.model).toBe("BatMobile");
  });

  it("initialize with the given milesPerGallon", () => {
    expect(batmobile.milesPerGallon).toBe(20);
  });

  it("initialize with an empty tank", () => {
    expect(batmobile.tank).toBe(0);
  });

  it("initialize with an odometer at 0 miles", () => {
    expect(batmobile.odometer).toBe(0);
  });

  it("get fill methods from their prototype", () => {
    expect(batmobile.hasOwnProperty('fill')).toBe(false);
    expect(Object.getPrototypeOf(batmobile).fill).toBeDefined();
  });

  it("fill method increases the tank by the given gallons", () => {
    batmobile.fill(10);
    expect(batmobile.tank).toBe(10);
    batmobile.fill(10);
    expect(batmobile.tank).toBe(20);
  });

  it("drive method when enough fuel increases odometer correctly", () => {
    batmobile.fill(10);
    batmobile.drive(50);
    expect(batmobile.odometer).toBe(50);
  });

  it("drive method when enough fuel decreases tank correctly", () => {
    batmobile.fill(10);
    batmobile.drive(100);
    expect(batmobile.tank).toBe(5);
  });

  it("drive method when NOT enough fuel increases miles by drivable miles", () => {
    batmobile.fill(10);
    batmobile.drive(201);
    expect(batmobile.odometer).toBe(200);
  });

  it("drive method when NOT enough fuel empties the tank", () => {
    batmobile.fill(10);
    batmobile.drive(201);
    expect(batmobile.tank).toBe(0);
  });

  it("drive method when NOT enough fuel returns correct string", () => {
    batmobile.fill(10);
    expect(batmobile.drive(201)).toMatch(/200/);
  });
});

describe("Instances of Baby", () => {
  let baby;

  beforeEach(() => {
    baby = new Baby("Lucy", 5, "trains");
  });
  
  it("initialize with the given name", () => {
    expect(baby.name).toBe("Lucy");
  });

  it("initialize with the given age", () => {
    expect(baby.age).toBe(5);
  });

  it("initialize with the given favorite toy", () => {
    expect(baby.favoriteToy).toBe("trains");
  });

  it("get a play method from their prototype", () => {
    expect(baby.hasOwnProperty('play')).toBe(false);
    expect(Object.getPrototypeOf(baby).play).toBeDefined();
  });

  it("can play with favorite toy", () => {
    expect(baby.play()).toMatch(/trains/);
  });

  it("inherit the methods on Person.prototype", () => {
    expect(baby.hasOwnProperty('eat')).toBe(false);
    expect(Object.getPrototypeOf(baby).eat).toBeDefined();

    expect(baby.hasOwnProperty('poop')).toBe(false);
    expect(Object.getPrototypeOf(baby).poop).toBeDefined();

    expect(baby.hasOwnProperty('toString')).toBe(false);
    expect(Object.getPrototypeOf(baby).toString).toBeDefined();
  });
});
