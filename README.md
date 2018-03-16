# Ordered Cartesian Product

Function that takes an ordering sequence and a mapping of dimensions
and outputs the ordered cartesian product of combinations.

```
let combos = OrderedCartisianProduct(
  ["x", "y],
  {
    "x": [1, 2, 3],
    "y": [4, 5, 6]
  }
)
console.log(combos);
// [{"x": 1, "y": 4}, {"x": 1, "y": 5}, {"x": 1, "y": 6}, {"x": 2, "y": 4}, {"x": 2, "y": 5}, {"x": 2, "y": 6}, {"x": 3, "y": 4}, {"x": 3, "y": 5}, {"x": 3, "y": 6}]
```
