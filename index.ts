import { curry } from '@mostly-adequate/support';

const add = (x, y) => x + y;
const add5 = curry(add)(5);
console.log("Line 5", add5(10));
