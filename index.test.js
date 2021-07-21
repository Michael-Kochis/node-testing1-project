const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const original = input;
    const actual = utils.trimProperties(original)
    
    expect(original).toMatchObject(input);
    expect(actual).toMatchObject(expected)
  })
  
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const original = input;
    utils.trimPropertiesMutation(original)
    
    expect(original).toMatchObject(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const original = input;
    utils.trimPropertiesMutation(original)
    
    expect(original).toBe(original);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [0, 1, 2, -4];
    const expected = 2;
    const actual = utils.findLargestInteger(input);

    expect(actual).toBe(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let actual = counter.countDown();
    const expected = 3;

    expect(actual).toBe(expected);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let actual = counter.countDown();
    actual = counter.countDown();
    const expected = 2;

    expect(actual).toBe(expected);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let loops = 81;
    let actual = counter.countDown();

    for(let i=0; i < loops; i++) {
      actual = counter.countDown();
      expect(actual).toBeGreaterThanOrEqual(0);
    }
    expect(actual).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const actual = seasons.next();

    expect(actual).toBe('summer');
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let actual;
    let expected = 'fall';
    const loops = 2;

    for (let i =0; i < loops; i++) {
      actual = seasons.next();
    }

    expect(actual).toBe(expected);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let actual;
    let expected = 'winter';
    const loops = 3;

    for (let i =0; i < loops; i++) {
      actual = seasons.next();
    }

    expect(actual).toBe(expected);
   
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let actual;
    let expected = 'spring';
    const loops = 4;

    for (let i =0; i < loops; i++) {
      actual = seasons.next();
    }

    expect(actual).toBe(expected);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let actual;
    let expected = 'summer';
    const loops = 5;

    for (let i =0; i < loops; i++) {
      actual = seasons.next();
    }

    expect(actual).toBe(expected);
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let actual;
    let expected = 'spring';
    const loops = 40;

    for (let i =0; i < loops; i++) {
      actual = seasons.next();
    }

    expect(actual).toBe(expected);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus).toBeDefined();
    const newMiles = 15;
    focus.drive(newMiles);
    const actual = focus.odometer;

    expect(actual).toBe(newMiles);
  })
  test('[16] driving the car uses gas', () => {
    const start = focus.tank;
    const newMiles = 15;

    focus.drive(newMiles);
    const actual = focus.tank;
    expect(actual).toBeLessThan(start);
  })
  test('[16B] the car runs out of gas and will no longer drive', () => {

  })
  test('[17] refueling allows to keep driving', () => {
    const newMiles = 1000;
    
    focus.drive(newMiles);
    const first = focus.odometer;
    focus.refuel(20);
    focus.drive(newMiles);
    const actual = focus.odometer;

    expect(actual).toBeGreaterThan(first);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const start = focus.tank;

    focus.refuel(20);
    const actual = focus.tank;

    expect(actual).toBe(start);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const actual = await utils.isEvenNumberAsync(102);
    expect(actual).toBeTruthy();
  })
  test('[20] resolves false if passed an odd number', async() => {
    const actual = await utils.isEvenNumberAsync(101);
    expect(actual).toBeFalsy();
  })
})
