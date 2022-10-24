type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;

    head?: Node<T>;
    tail?: Node<T>;



    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;

    }

    enqueue(item: T): void {
        const node = { value: item, } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node
            return;
        }

        this.tail.next = node;
        this.tail = node;



    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        // var node = this.head; // const
        const node = this.head; // const
        this.head = this.head.next;

        //بدل ما يشاور على النود اللي بالفعل اتمسحت من الميموري .. بعيد قيدمته للبداية.
        // pointing to a deleted item in memory ,, So I reinitialize it again.
        if (this.length === 0) {
            this.tail = undefined;
        }

        ///not needed in JS (garbage collection is doing it automatically)
        /// to unlink old head  
        node.next = undefined;
        return node.value;



    }
    peek(): T | undefined {
        /// ? instead
        // if (!this.head) {
        //     return undefined;
        // }
        return this.head?.value;
    }
}