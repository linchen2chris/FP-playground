// Considering the following function:
//
//   const keepHighest = (x, y) => (x >= y ? x : y);
//
// Refactor `max` to not reference any arguments using the helper function `keepHighest`.

// max :: [Number] -> Number

// const keepHighest = (x, y) => (x >= y ? x : y);
const max = reduce(keepHighest)(-Infinity);
