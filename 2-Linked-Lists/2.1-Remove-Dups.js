"use strict";
class LNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
    setNext(node) {
        this.next = node;
    }
    getNext() {
        return this.next;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    addNode(node) {
        let nodePointer = this.head;
        while (nodePointer?.getNext() !== undefined) {
            nodePointer = nodePointer.getNext();
        }
        nodePointer?.setNext(node);
    }
    printList() {
        let nodePointer = this.head;
        let nodeNumber = 0;
        while (nodePointer?.getNext !== undefined) {
            console.log(nodeNumber, ': ', nodePointer.getValue(), '-->');
            nodePointer = nodePointer?.getNext();
            nodeNumber++;
        }
    }
}
let myList = new LinkedList(new LNode('firstNode'));
myList.addNode(new LNode('one more'));
myList.addNode(new LNode('one flew over'));
myList.printList();
