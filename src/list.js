class Node {
    constructor(item) {
        this.item = item
        this.next = null
    }
}
class SingleLinkList {
    constructor(item) {
        this._head = null
    }
}


const list = new SingleLinkList()

let cur = list._head = new Node(1)

for (let i = 2; i <= 6; i++) {
    const a = new Node(i)
    cur.next = a
    cur = a
}

export default list