class LNode {
  private value: string
  private next: LNode | undefined
  constructor(value: string, next?: LNode) {
    this.value = value
    this.next = next
  }
  public setNext(node: LNode) {
    this.next = node
  }
  public getNext() {
    return this.next
  }
  public setValue(value: string) {
    this.value = value
  }
  public getValue() {
    return this.value
  }
}

class LinkedList {
  private head: LNode
  constructor(head: LNode) {
    this.head = head
  }
  public addNode(node: LNode): void {
    let nodePointer: LNode | undefined = this.head
    while (nodePointer?.getNext() !== undefined) {
      nodePointer = nodePointer.getNext()
    }
    nodePointer?.setNext(node)
  }
  public printList(): void {
    let nodePointer: LNode | undefined = this.head
    let nodeNumber: number = 0
    while (nodePointer?.getNext !== undefined) {
      console.log(nodeNumber, ': ', nodePointer.getValue(), '-->')
      nodePointer = nodePointer?.getNext()
      nodeNumber++
    }
  }
}

let myList = new LinkedList(new LNode('firstNode'))
myList.addNode(new LNode('one more'))
myList.addNode(new LNode('one flew over'))
myList.printList()
