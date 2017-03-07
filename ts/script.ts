//import square, {cow as dog} from './utils';
import * as utils from './utils';
console.log(utils.square(3));
utils.cow();


let decimal: number = 6;
let done : boolean = false;
let color: string = "blue";
let list: number[] = [1,2,3];
 
let list2: Array<number> = [1,2,3];

let fun: Function = () => console.log('test');

enum Direction {
	Up,
	Down,
	Left,
	Right
}

let go: Direction;
go = Direction.Up;