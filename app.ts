import Stack from './classes/Stack';
import Queue from "./classes/Queue";


const myStackObj = new Stack<Number>([1,6,9,4]);
const myQueueObj = new Queue<String>(["dinaaz","Risha"]);

myQueueObj.display();
myQueueObj.pop();
myQueueObj.display();
myQueueObj.push("Shaikh");
myQueueObj.display();
