import MyInterface from '../interfaces/MyInterface';

export default class Stack<T> implements MyInterface<T>{
    private myStack:Array<T> = new Array<T>();

    constructor(elements?:Array<T>) {
        this.myStack = elements;
    }

    push(element:T) {
       this.myStack.push(element);
   }

    pop():T{
        let poppedElement = this.myStack.pop();
        console.log("Popped Element:",poppedElement);
       return poppedElement;
    }

    display(): Array<T> {
        console.log(this.myStack);
       return this.myStack;
    }

}