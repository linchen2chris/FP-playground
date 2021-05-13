// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
  return concat(compose(prop("name"), last, sortBy(prop("horsepower")))(cars), " is the fastest");
};
