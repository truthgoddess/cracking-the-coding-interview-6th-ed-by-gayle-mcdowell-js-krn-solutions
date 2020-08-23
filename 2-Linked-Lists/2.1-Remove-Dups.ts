class LNode {
  private _value: string
  private _next: LNode | undefined
  constructor(value: string, next?: LNode) {
    this._value = value
    this._next = next
  }
  public set next(node: LNode | undefined) {
    this._next = node
  }
  public get next(): LNode | undefined {
    return this._next
  }
  public set value(value: string) {
    this._value = value
  }
  public get value() {
    return this._value
  }
}

class LinkedList {
  private _head: LNode
  private _tail: LNode | undefined
  constructor(head: LNode = new LNode('head')) {
    this._head = head
    this._tail = undefined
  }
  public addNode(node: LNode): void {
    if (this.tail === undefined) {
      this.head.next = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
  public printList(): void {
    let nodePointer: LNode | undefined = this.head
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
  public set head(node: LNode) {
    this._head = node
  }
  public get head(): LNode {
    return this._head
  }
  public set tail(node: LNode | undefined) {
    this._tail = node
  }
  public get tail(): LNode | undefined {
    return this._tail
  }
  public makeList(arr: Array<string>): LNode | undefined {
    for (let item of arr) {
      this.addNode(new LNode(item))
    }
    return this.head
  }
  public removeDuplicates(): void {
    let possibleDuplicates = new Set<string>()
    let trailing = this.head
    let pointer = this.head
    while (pointer.next !== undefined) {
      if (possibleDuplicates.has(pointer.value)) {
        trailing.next = pointer.next
        pointer = trailing.next
      } else {
        possibleDuplicates.add(pointer.value)
        trailing = pointer
        pointer = pointer.next
      }
    }
    if (possibleDuplicates.has(trailing.value)) {
      trailing.next = undefined
    }
  }
}

let myList = new LinkedList(new LNode('start'))
myList.makeList(['a', 'a', 'b', 'b', '1', 'd', 'e', 'e', 'e', 'w', 'ac', 'ac'])
myList.removeDuplicates()
myList.printList() //'start', 'a', 'b', '1', 'd', 'e', 'w', 'ac'

let emptyList = new LinkedList()
emptyList.removeDuplicates()
emptyList.printList() //'head'

let allCopies = new LinkedList()
allCopies.makeList(['a', 'a', 'a', 'a', 'a', 'a'])
allCopies.removeDuplicates()
allCopies.printList() //'head', 'a'
