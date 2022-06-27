class Node {
	constructor(data=null, ptr=null) {
		this.data = data //this stores the number
		this.ptr = ptr // points to next node
	}
}

class LinkedList {
	constructor(head, next=null) {
		this.head = new Node(head) // this is a node
		this.next = next // this points to the next node
		this.tail = this.head
	}

	push(data) {
		let curr = this.head
		while (curr.next != null) {
			curr = curr.next		
		}
		curr.next = new Node(data, null)
		this.tail = curr.next
	}
	
	toString() {
		let out = 'head ->'
		let curr = this.head
		while (curr != null) {
			out += `${curr.data} -> `
			curr = curr.next
		}
		return out + 'null'
	}

	shift() {
		let node = this.head
		this.head = this.head.next
		node.next = null
		return node
	}

	pop() {
		let curr = this.head
		while (curr.next != this.tail) {
			curr = curr.next
		}
		let node = this.tail
		this.tail = curr
		this.tail.next = null
		return node
	}

	length() {
		let count = 0
		let curr = this.head
		while (curr != null) {
			++count
			curr = curr.next
		}
		return count
	}

	contains(n) {
		let curr = this.head
		while (curr != null) {
			if (curr.data == n) {
				return node
			}
			curr = curr.next
		}
		return false
	}

	insert(data, pos) {
		if (pos == 0) {
			this.head = new Node(data, this.head)
			return this.head
		} else if (pos == this.length()) {
			this.tail.next = new Node(data)
			this.tail = this.tail.next
			this.tail
		} else {
			let count = 1
			let curr = this.head
			while (count < pos) {
				++count
				curr = curr.next
			}
			let next = curr.next
			console.log(next)
			let node = new Node(data)
			node.next = curr.next
			curr.next = node
			return node
		}
	}
	//unshift()
}

let ll = new LinkedList(1)
ll.push(2)
ll.push(4)
ll.push(5)
ll.insert(3,2)

console.log(ll.toString())



class Queue() {
	constructor() {
		let q = new LinkedList()
	}

	
}







