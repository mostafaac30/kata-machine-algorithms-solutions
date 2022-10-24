import Trie from "./Trie";

type Node<T> = {
    value: T,
    prev?: Node<T>
}


export default class Stack<T> {
    public length: number;
    head?: Node<T>;
    tail?: Node<T>;



    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
        }
        node.prev = this.tail;
        this.tail = node;
    }
    pop(): T | undefined {

        if (!this.tail) {
            return undefined;
        }

        const tail = this.tail;

        this.tail = this.tail.prev;
        tail.prev = undefined;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }
        return tail.value;

    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}