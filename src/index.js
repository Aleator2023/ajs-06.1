function orderByProps(obj, order) {
    const orderedProps = [];
    const restProps = [];
  
    // Сортировка по заданному порядку
    for (const prop of order) {
      if (obj.hasOwnProperty(prop)) {
        orderedProps.push({ key: prop, value: obj[prop] });
      }
    }
  
    // Сортировка оставшихся свойств по алфавиту
    const sortedKeys = Object.keys(obj).sort().filter(key => !order.includes(key));
  
    for (const key of sortedKeys) {
      restProps.push({ key, value: obj[key] });
    }
  
    return [...orderedProps, ...restProps];
  }

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const order = ["name", "level"];

console.log(orderByProps(obj, order));

module.exports = { orderByProps };


  