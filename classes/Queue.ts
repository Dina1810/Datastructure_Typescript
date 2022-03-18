import MyInterface from "../interfaces/MyInterface";

export default class Queue<T> implements MyInterface<T>{
    private myQueue:Array<T> = new Array<T>();

    constructor(elements?:Array<T>) {
        this.myQueue = elements;
    }

    push(element: T) {
        this.myQueue.push(element);
    }

    pop(): T {
        let poppedElement = this.myQueue.shift();
        console.log("Popped Elment:",poppedElement);
        return poppedElement;
    }

    display(): Array<T> {
        console.log(this.myQueue)
        return this.myQueue;
    }
}