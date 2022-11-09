import calculate from '../logic/calculate';

const object = {
  total: null, next: null, operation: null,
};

describe('test for all buttons functionalities', () => {
  test('clear all button should reset data to null', () => {
    expect(calculate(object, 'AC')).toEqual(object);
  });
  test('zero button should return empty object', () => {
    const obj = { ...object, next: '0' };
    expect(
      calculate(obj, '0'),
    ).toEqual({});
  });
  test('Test if there is an operation, update next', () => {
    const obj = { ...object, next: '3', operation: '+' };
    expect(calculate(obj, '9')).toEqual({ ...obj, next: `${obj.next}9` });
  });
  test('Test if there is no operation, update next and clear the value', () => {
    const obj = { ...object };
    expect(calculate(obj, '2')).toEqual({ next: '2', total: null });
  });
  test('Test if the button name is .', () => {
    const obj = { ...object, next: '0.367' };
    expect(calculate(obj, '.')).toEqual({ ...obj });
  });
  test('Test if  operation is =', () => {
    const obj = {
      ...object, next: '87', total: '3', operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      ...obj, total: '90', next: null, operation: null,
    });
  });
  test('Test if one of obj.next or obj.operation are missing, nothing to do', () => {
    const obj = {
      ...object, next: '87', total: '3', operation: null,
    };
    expect(calculate(obj, '=')).toEqual({});
  });
  test("Test User pressed an operation after pressing '='", () => {
    const obj = { ...object, total: '50' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
});

describe('Test if user pressed an operation button and there is an existing operation', () => {
  test('if obj.total and obj.next is false', () => {
    const obj = { ...object, total: '50', operation: '-' };
    expect(calculate(obj, '+')).toEqual({ ...obj, operation: '+' });
  });
  test('if obj.total and obj.next is false', () => {
    const obj = { ...object, total: '0', operation: '-' };
    expect(calculate(obj, 'x')).toEqual({ ...obj, total: '0', operation: 'x' });
  });

  test('test if obj.total is false', () => {
    const obj = { ...object, total: '0', operation: '+' };
    expect(calculate(obj, '+')).toEqual({ ...obj });
  });
  test("The user hasn't typed a number yet, just save the operation", () => {
    const obj = { ...object };
    expect(calculate(obj, '+')).toEqual({ operation: '+' });
  });
});
