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
  private _head: Node_2 | undefined
  private _tail: Node_2 | undefined
  private _length: number
  constructor(head: Node_2 | undefined) {
    this._head = head
    this._tail = head
    this._length = head ? 1 : 0
  }
  public get head(): Node_2 | undefined {
    return this._head
  }
  public set head(node: Node_2 | undefined) {
    this._head = node
  }
  public get tail(): Node_2 | undefined {
    return this._tail
  }
  public set tail(node: Node_2 | undefined) {
    this._tail = node
  }
  public get length(): number {
    return this._length
  }
  public set length(length) {
    this._length = length
  }
  public addNode(node: Node_2): void {
    if (this.head === undefined) {
      this.head = node
      this.tail = node
      this.length = this.length + 1
    } else if (this.head && this.tail) {
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
      console.log(nodeNumber, ': ', nodePointer.value, '-->')
      nodePointer = nodePointer?.next
      nodeNumber++
    }
    console.log(nodeNumber, ': ', nodePointer?.value, '-->')
    console.log('end')
    console.groupEnd()
  }

  public kthToLast(k: number): Node_2 | undefined {
    let nodePointer: Node_2 | undefined = this.head
    let nodeNumber: number = 0
    let targetNumber: number = this.length - k
    if (nodePointer === undefined) {
      console.log('Error: List has no Nodes.')
      return undefined
    } else if (k > this.length) {
      console.log('Error: k puts target outside of List')
      return undefined
    } else {
      while (nodeNumber !== targetNumber && nodePointer.next) {
        nodePointer = nodePointer.next
        nodeNumber++
      }
      return nodePointer
    }
  }
}

let myList2 = new LinkedList2(undefined)
let emptyList2 = new LinkedList2(undefined)
myList2.makeList([3, 5, 2, 33, 4, 5, 6])
myList2.printList() //print list
console.log(myList2.kthToLast(2)) //Node 2: 5
console.log(myList2.kthToLast(4)) //Node 2: 33
console.log(myList2.kthToLast(100)) //undefined console: Error: k puts target outside of List
console.log(emptyList2.kthToLast(3)) //undefined console: Error: List has no Nodes.
