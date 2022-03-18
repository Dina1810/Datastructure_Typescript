export default interface MyInterface<T> {
    push(element:T): void;
    pop():T;
    display():Array<T>;
}