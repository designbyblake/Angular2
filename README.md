# Angular2 Notes

##Typescript
###Command Line
- tsc filename.ts -> filename.js
- tsc -w filename.ts -> watcher for filename.ts
- tsc -t ES filename.ts -> filename.js in ES6 syntax
- tsc --init creates int
- tsc -w -> watch folder needs config

##ES6
###Scope
- let has block level scope
- const foo = {}; foo always the same object but object properties can change - variable imutable
- const foo = Object.freeze({}); object properties can no longer change - object imutable
- trying to change frozen object fails silently unless "use strict"; is at top of file

###Strings
- multiline strings use back-ticks ``;
	- Will add line breaks
	- ${variablename} - will allow for use of variable without escaping string;
	- var test = cool; 'this is ' + test -> `this is ${cool}`;

###Fat Arrow functions
```javascript
	setTimeout(function(){
		console.log('test');
	}, 1000);

	//the same as above
	setTimeout(()=> console.log('test'), 1000);

	//old way
	let add = function(a, b){
		return a+b;
	};

	//new way
	let add = (a,b) => {
		return a+b;
	}

	//new short way
	let add = (a,b) => a+b;
	add(1,2);


	let obj ={
		name: 'Dan',
		sayLater: function(){
			let self = this;
			setTimeout(function(){
				console.log(self.name);
			}, 1000);
		}
	}

	let obj ={
		name: 'Dan',
		sayLater: function(){
			let self = this;
			setTimeout(() => console.log(self.name), 1000);
		}
	}
```

###Destructuring
```javascript
	const obj = {first: 'Dan', last: "Blake"};
	const {first: f, last: l} = obj;
	console.log(f); //Dan
	console.log(l); //Blake

	const {first, last} = obj;
	console.log(first); //Dan
	console.log(last); //Blake

	const arr = ['a', 'b'];
	const [x,y] = arr;
	console.log(x); //a

	function f({x=0}) {
	  console.log(x)
	}
	f(); //Error Undefined
	f({}); // 0 f({x=0});
	f({x:200}); // 200
```

###ForOf

- *for-in* loop is for looping over object properties
- *for-of* loop is for looping over the values in an array

```javascript
let obj = {a:1, b:2};
for (let prop in obj) {
	console.log(prop);
	console.log(obj[prop]);
}
//a
//1
//b
//2

let array =[10,20,30];
for(let value of array){
	console.log(value);
}
//10
//20
//30
```

###Map and Set
```javascript
//Map has keys and values
//Sets just values

let base = {a:1, b:2};
let obj = Object.create(base);
obj['c'] = 3;

console.log(obj.a); //1

for(prop in obj){
	if(obj.hasOwnPropety(prop)) {
		console.log(prop); //c
	}	
}

let map = new Map()
	.set("A", 1)
	.set("B", 2);

map.set("C", 3);
console.log(map.size);//3
console.log(map.get("C")); //3
console.log(map.has("D"));//false
console.log(map.has("B"));//true

map.delete("A");
console.log(map.get("A")); //false because deleted

map.clear(); // clears all items in map

let fruit = new Map([
	["Apple",1],
	["Orange",2],
	["Mango",3]
]);

//fruit.keys()
//fruit.values()
for(let key of fruit.keys()){
	console.log(key);
	//Apple
	//Orange
	//Mango
}

let set = new Set(['Dan', 'Blake']);
console.log(set.has('Dan')); //true
console.log(set.size);//2
```

###Promises


```javascript
const hasError = false;

function doAsyncTask() {
  console.log("Async Promises DAN");
  let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(hasError){
        reject('fail');
      }else{
        resolve('success');
      }
    },4000);
  });
  return promise;
}


doAsyncTask().then(
  (val) => console.log(val),
  (err) => console.log(err)
).then(
  () => setTimeout(() =>{console.log('boom voom boom')},10000);,
  (err) => console.log(err)
);

```

###Classes & Interfaces
