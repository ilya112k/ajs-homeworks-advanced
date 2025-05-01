import {orderByProps, destructuring} from '../advanced';


describe('for ... in', () => {
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
})

describe('Destructuring', () => {
  test('should be correct', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
          // <- обратите внимание, описание "засекречено"
        }
      ]
    }

    const result = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
      }
    ];

    expect(destructuring(character)).toEqual(result);
  })

  test('special is undefined', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    }

    expect(() => destructuring(character)).toThrow('No item specified');
  })

})

