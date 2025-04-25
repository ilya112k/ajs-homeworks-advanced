import {orderByProps} from '../advanced';

test('should be correct', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const order = ["name", "level"];
  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(expected);
});

test('empry props array', () => {
  const obj = { b: 2, a: 1 };
  expect(orderByProps(obj, [])).toEqual([
    { key: "a", value: 1 },
    { key: "b", value: 2 },
  ]);
});

test('empty array', () => {
  expect(orderByProps({}, ["test"])).toEqual([]);
});
