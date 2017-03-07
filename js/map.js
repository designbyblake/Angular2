let map = new Map()
    .set("A", 1)
    .set("B", 2);
map.set("C", 3);
console.log(map.size); //3
console.log(map.get("C")); //3
console.log(map.has("D")); //false
console.log(map.has("B")); //true
map.delete("A");
console.log(map.get("A")); //false because deleted
map.clear(); // clears all items in map
let fruit = new Map([
    ["Apple", 1],
    ["Orange", 2],
    ["Mango", 3]
]);
//fruit.keys()
//fruit.values()
for (let key of fruit.keys()) {
    console.log(key);
    //Apple
    //Orange
    //Mango
}
let set = new Set(['Dan', 'Blake']);
console.log(set.has('Dan')); //true
console.log(set.size); //2
