# Angular2 Notes

##Command Line
- tsc filename.ts -> filename.js
- tsc -w filename.ts -> watcher for filename.ts
- tsc -t ES filename.ts -> filename.js in ES6 syntax
- tsc --init creates int
- tsc -w -> watch folder needs config

##Scope
- let has block level scope
- const foo = {}; foo always the same object but object properties can change - variable imutable
- const foo = Object.freeze({}); object properties can no longer change - object imutable
- trying to change frozen object fails silently unless "use strict"; is at top of file

##Strings
- multiline strings use back-ticks ``;
	- Will add line breaks
	- ${variablename} - will allow for use of variable without escaping string;
	- var test = cool; 'this is ' + test -> `this is ${cool}`;

##Fat Arrow functions
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

##Destructuring
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

##ForOf


