export function orderByProps(obj, order) {
  const orderedKeys = [];
  const otherKeys = [];

  for (const key of order) {
    if (!!obj[key]) {
      orderedKeys.push(key);
    }
  }

  for (const key in obj) {
    if (!order.includes(key) && obj[key]) {
      otherKeys.push(key);
    }
  }

  otherKeys.sort();

  const sortedKeys = [...orderedKeys, ...otherKeys];
  return sortedKeys.map(key => ({ key, value: obj[key] }));
}


export function destructuring(item) {
  if (item.special === undefined) {
    throw new Error('No item specified');
  }
  return item.special.map((x) => {
    return {
      id: x.id,
      name: x.name,
      description: x.description || 'Описание недоступно',
      icon: x.icon
    }
  });
}
