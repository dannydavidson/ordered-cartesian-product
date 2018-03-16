var product = require('cartesian-product');

module.exports = function (order, values) {
  let loop = order.map((key => {
    if (!values[key]) {
      throw new Error('Each "order" key must have a corresponding array in "values"');
    }
    return values[key];
  }));

  return product(loop)
    .map((combo) => {
      var data = {};

      combo.forEach((value, i) => {
        data[order[i]] = value;
      });

      return data;
    });

}
