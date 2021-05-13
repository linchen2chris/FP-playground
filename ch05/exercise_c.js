// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
const fastestCar = compose(
  append(" is the fastest"),
  prop("name"),
  last,
  sortBy(prop("horsepower"))
);
