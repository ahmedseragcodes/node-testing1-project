const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test.todo('[2] returns a copy, leaving the original object intact', ()=>{
    const input = { name: "Ahmed", job: "Programmer  " }
    const expected = { name: "Ahmed", job: "Programmer" }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test.todo('[3] returns an object with the properties trimmed', ()=>{
    const input = { name: "Ahmed", job: "Programmer  " }
    const expected = { name: "Ahmed", job: "Programmer" }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected);
  })
  test.todo('[4] the object returned is the exact same one we passed in',()=>{
    const input = { name: "Ahmed", job: "Programmer" }
    const actual = utils.trimProperties(input)
    expect(actual).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test.todo('[5] returns the largest number in an array of objects { integer: 2 }',()=>{
    const arrayOfNumbers = [
      {integer: 1},
      {integer: 2},
      {integer: 3},
    ]
    const expected = 3;
    const actual = utils.findLargestInteger(arrayOfNumbers);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test.todo('[6] the FIRST CALL of counter.countDown returns the initial count',()=>{
    const initialValue = 3;
    const valueAfterOneRound = counter.countDown();
    expect(valueAfterOneRound).toEqual(initialValue);
  })
  test.todo('[7] the SECOND CALL of counter.countDown returns the initial count minus one',()=>{
    const expectedValue = 2;
    const valueAfterOneRound = counter.countDown();
    expect(valueAfterOneRound).toEqual(expectedValue);
  })
  test.todo('[8] the count eventually reaches zero but does not go below zero',()=>{
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const finalValue = counter.countDown();
    const expectedValue = 0;
    expect(finalValue).toEqual(expectedValue);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test.todo('[9] the FIRST call of seasons.next returns "summer"', ()=>{
    expect(seasons.next()).toBe("summer");
  })
  test.todo('[10] the SECOND call of seasons.next returns "fall"',()=>{
    seasons.next()
    expect(seasons.next()).toBe("fall");
  })
  test.todo('[11] the THIRD call of seasons.next returns "winter"',()=>{
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("winter");
  })
  test.todo('[12] the FOURTH call of seasons.next returns "spring"',()=>{
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("spring")
  })
  test.todo('[13] the FIFTH call of seasons.next returns again "summer"',()=>{
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe("summer")
  })
  test.todo('[14] the 40th call of seasons.next returns "spring"',()=>{
    for(let i=0; i<39; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test.todo('[15] driving the car returns the updated odometer',()=>{
    expect(focus.drive(100)).toBe(100);
    expect(focus.drive(100)).toBe(200);
    expect(focus.drive(100)).toBe(300);
    expect(focus.drive(200)).toBe(500);
  })
  test.todo('[16] driving the car uses gas',()=>{
    focus.drive(600)
    expect(focus.tank).toBe(0)
  })
  test.todo('[17] refueling allows to keep driving')
  test.todo('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number')
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
