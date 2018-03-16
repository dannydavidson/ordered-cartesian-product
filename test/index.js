const _ = require('lodash');
const expect = require('expect');

const OrderedCartesianProduct = require('../');

describe('Ordered Combinations', () => {

  const table = [
    {
      input: [[
        "Port",
        "Voltage",
        "Power"
      ],
      {
        "Port": [
          1,
          2,
          3
        ],
        "Voltage": [
          4,
          5
        ],
        "Power": [
          6,
          7,
          8
        ]
      }],
      expected: [
        { "Port": 1, "Voltage": 4, "Power": 6 },
        { "Port": 1, "Voltage": 4, "Power": 7 },
        { "Port": 1, "Voltage": 4, "Power": 8 },

        { "Port": 1, "Voltage": 5, "Power": 6 },
        { "Port": 1, "Voltage": 5, "Power": 7 },
        { "Port": 1, "Voltage": 5, "Power": 8 },

        { "Port": 2, "Voltage": 4, "Power": 6 },
        { "Port": 2, "Voltage": 4, "Power": 7 },
        { "Port": 2, "Voltage": 4, "Power": 8 },

        { "Port": 2, "Voltage": 5, "Power": 6 },
        { "Port": 2, "Voltage": 5, "Power": 7 },
        { "Port": 2, "Voltage": 5, "Power": 8 },

        { "Port": 3, "Voltage": 4, "Power": 6 },
        { "Port": 3, "Voltage": 4, "Power": 7 },
        { "Port": 3, "Voltage": 4, "Power": 8 },

        { "Port": 3, "Voltage": 5, "Power": 6 },
        { "Port": 3, "Voltage": 5, "Power": 7 },
        { "Port": 3, "Voltage": 5, "Power": 8 }
      ]
    },
    {
      input: [
        ["x", "y"],
        {
          "x": [1, 2, 3],
          "y": [4, 5, 6]
        }
      ],
      expected: [
        { "x": 1, "y": 4 },
        { "x": 1, "y": 5 },
        { "x": 1, "y": 6 },
        { "x": 2, "y": 4 },
        { "x": 2, "y": 5 },
        { "x": 2, "y": 6 },
        { "x": 3, "y": 4 },
        { "x": 3, "y": 5 },
        { "x": 3, "y": 6 }]
    }
  ];

  it('produces correct combinations', () => {

    table.forEach((config) => {
      const result = OrderedCartesianProduct.apply(null, config.input);

      expect(result).toEqual(config.expected);
    });

  });

  it('throws error if key in order array is missing in values', () => {
    const wrapper = () => {
      OrderedCartesianProduct(["Port"], {});
    }
    expect(wrapper).toThrow('Each "order" key must have a corresponding array in "values"')
  });

});
