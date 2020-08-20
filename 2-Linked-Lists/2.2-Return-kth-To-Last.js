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
    constructor(head = new Node_2(0)) {
        this._head = head;
        this._tail = head;
        this._length = 1;
    }
    get head() {
        return this._head;
    }
    set head(node) {
        this._head = node;
    }
    get tail() {
        return this._head;
    }
    set tail(node) {
        this._head = node;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    addNode(node) {
        if (this.length === 1) {
            this.tail = node;
            this.head.next = this.tail;
            this.length = this.length + 1;
        }
        else {
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
            console.log('test');
            console.log(nodeNumber, ': ', nodePointer.value, '-->');
            nodePointer = nodePointer?.next;
            nodeNumber++;
        }
        console.log(nodeNumber, ': ', nodePointer?.value, '-->');
        console.log('end');
        console.groupEnd();
    }
}
let myList2 = new LinkedList2();
myList2.makeList([3, 5, 2, 33, 4, 5, 6]);
myList2.printList();
