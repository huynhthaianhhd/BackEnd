export const pick = (object, keys) => {
  if (!keys) return object;
  return keys.reduce((obj, key) => {
    if (object && key in object) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const flatObjectsByKeys = (objects, flattedKeys) => {
  return objects.map((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (flattedKeys.includes(key)) {
        delete obj[key];
        obj = { ...obj, ...value };
      }
    }
    return obj;
  });
};

export const nameOfSeats = (pickedSeats) => {
  return pickedSeats
    .map((item) => `${item.row}${item.no.toString().padStart(2, '0')}`)
    .join(', ');
};
export const calcTotal = (pickedSeats) => {
  return pickedSeats.reduce((pre, curr) => pre + curr.price, 0);
};
export const pricePerSeatToString = (pickedSeats) => {
  return pickedSeats.map((item) => item.price).join('-');
};
