import Trie from "./Trie";

type Node<T> = {
    value: T,
    prev?: Node<T>
}


export default class Stack<T> {
    public length: number;
    head?: Node<T>;



    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.head = node;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {

        if (!this.head) {
            return undefined;
        }

        const head = this.head;

        this.head = this.head.prev;
        head.prev = undefined;
        this.length--;

        if (this.length === 0) {
            this.head = undefined;
        }
        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}