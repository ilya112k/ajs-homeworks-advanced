export function orderByProps(obj, order) {
  const orderedKeys = [];
  const otherKeys = [];

  for (const key of order) {
    if (obj.hasOwnProperty(key)) {
      orderedKeys.push(key);
    }
  }

  for (const key in obj) {
    if (!order.includes(key) && obj.hasOwnProperty(key)) {
      otherKeys.push(key);
    }
  }

  otherKeys.sort();

  const sortedKeys = [...orderedKeys, ...otherKeys];
  return sortedKeys.map(key => ({ key, value: obj[key] }));
}

