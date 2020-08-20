class Node_2 {
  private _value: number
  private _next: Node_2 | undefined
  constructor(value: number) {
    this._value = value
    this._next = undefined
  }
  public get value(): number {
    return this._value
  }
  public set value(num: number) {
    this._value = num
  }
  public get next(): Node_2 | undefined {
    return this._next
  }
  public set next(node: Node_2 | undefined) {
    this._next = node
  }
}

class LinkedList2 {
  private _head: Node_2
  private _tail: Node_2
  private _length: number
  constructor(head: Node_2 = new Node_2(0)) {
    this._head = head
    this._tail = head
    this._length = 1
  }
  public get head(): Node_2 {
    return this._head
  }
  public set head(node: Node_2) {
    this._head = node
  }
  public get tail(): Node_2 {
    return this._head
  }
  public set tail(node: Node_2) {
    this._head = node
  }
  public get length(): number {
    return this._length
  }
  public set length(length) {
    this._length = length
  }
  public addNode(node: Node_2): void {
    if (this.length === 1) {
      this.tail = node
      this.head.next = this.tail
      this.length = this.length + 1
    } else {
      this.tail.next = node
      this.tail = node
      this.length = this.length + 1
    }
  }
  public makeList(arr: Array<number>): void {
    for (let num of arr) {
      this.addNode(new Node_2(num))
    }
  }
  public printList(): void {
    let nodePointer: Node_2 | undefined = this.head
    let nodeNumber: number = 0
    console.group('printing LL')
    while (nodePointer?.next !== undefined) {
      console.log('test') //not inside of here
      console.log(nodeNumber, ': ', nodePointer.value, '-->')
      nodePointer = nodePointer?.next
      nodeNumber++
    }
    console.log(nodeNumber, ': ', nodePointer?.value, '-->')
    console.log('end')
    console.groupEnd()
  }
}

let myList2 = new LinkedList2()
myList2.makeList([3, 5, 2, 33, 4, 5, 6])
myList2.printList()
