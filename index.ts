import { from } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/from
// Example 3: Observable from collection
// works on js collections
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');
map.set(6, 'Quit');
map.set(9, '...');

const mapSrc = from(map);
const subscribe = mapSrc.subscribe((val) => console.log(val));
