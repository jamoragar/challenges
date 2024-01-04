import getRandomColor from './utils/randomColor.js'
import Circle from './components/Circle/Circle.js';
import Square from './components/Square/Square.js';
import Pentagon from './components/Pentagon/Pentagon.js';

console.clear();

const root = document.getElementById("root");

const circle = Circle(getRandomColor);
const square = Square(getRandomColor);
const pentagon = Pentagon(getRandomColor);


root.append(circle, square, pentagon);
