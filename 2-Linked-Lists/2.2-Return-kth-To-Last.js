"use strict";
class Node_2 {
    constructor(value) {
        this._value = value;
        this._next = undefined;
    }
    get value() {
        return this._value;
    }
    set value(num) {
        this._value = num;
    }
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
}
class LinkedList2 {
    constructor(head) {
        this._head = head;
        this._tail = head;
        this._length = head ? 1 : 0;
    }
    get head() {
        return this._head;
    }
    set head(node) {
        this._head = node;
    }
    get tail() {
        return this._tail;
    }
    set tail(node) {
        this._tail = node;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    addNode(node) {
        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            this.length = this.length + 1;
        }
        else if (this.head && this.tail) {
            this.tail.next = node;
            this.tail = node;
            this.length = this.length + 1;
        }
    }
    makeList(arr) {
        for (let num of arr) {
            this.addNode(new Node_2(num));
        }
    }
    printList() {
        let nodePointer = this.head;
        let nodeNumber = 0;
        console.group('printing LL');
        while (nodePointer?.next !== undefined) {
            console.log(nodeNumber, ': ', nodePointer.value, '-->');
            nodePointer = nodePointer?.next;
            nodeNumber++;
        }
        console.log(nodeNumber, ': ', nodePointer?.value, '-->');
        console.log('end');
        console.groupEnd();
    }
    kthToLast(k) {
        let nodePointer = this.head;
        let nodeNumber = 0;
        let targetNumber = this.length - k;
        if (nodePointer === undefined) {
            console.log('Error: List has no Nodes.');
            return undefined;
        }
        else if (k > this.length) {
            console.log('Error: k puts target outside of List');
            return undefined;
        }
        else {
            while (nodeNumber !== targetNumber && nodePointer.next) {
                nodePointer = nodePointer.next;
                nodeNumber++;
            }
            return nodePointer;
        }
    }
}
let myList2 = new LinkedList2(undefined);
let emptyList2 = new LinkedList2(undefined);
myList2.makeList([3, 5, 2, 33, 4, 5, 6]);
myList2.printList();
console.log(myList2.kthToLast(2)); //Node 2: 5
console.log(myList2.kthToLast(4)); //Node 2: 33
console.log(myList2.kthToLast(100)); //undefined console: Error: k puts target outside of List
console.log(emptyList2.kthToLast(3)); //undefined console: Error: List has no Nodes.
