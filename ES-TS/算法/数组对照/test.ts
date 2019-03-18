import data from "./data";

import compare from "./compare";

console.log("userList 人数", data.userList);

let scr1 = data.userList.slice(0, 4);
let scr2 = data.userList.slice(3, 9);
let diff = compare(scr1, scr2);

console.log();
