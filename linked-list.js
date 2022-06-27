class Node {
	constructor(data=null, ptr=null) {
		this.data = data //this stores the number
		this.ptr = ptr // points to ptr node
	}
}

class LinkedList {
	constructor(head, ptr=null) {
		this.head = new Node(head, ptr) // this is a node
		this.ptr = this.head.ptr // this points to the ptr node
		this.tail = this.head
	}

	push(data) {
		let curr = this.head
		while (curr.ptr != null) {
			curr = curr.ptr		
		}
		curr.ptr = new Node(data, null)
		this.tail = curr.ptr
	}
	
	toString() {
		let out = 'head ->'
		let curr = this.head
		while (curr != null) {
			out += `${curr.data} -> `
			curr = curr.ptr
		}
		return out + 'null'
	}

	shift() {
		let node = this.head
		this.head = this.head.ptr
		node.ptr = null
		return node
	}

	pop() {
		let curr = this.head
		while (curr.ptr != this.tail) {
			curr = curr.ptr
		}
		let node = this.tail
		this.tail = curr
		this.tail.ptr = null
		return node
	}

	length() {
		let count = 0
		let curr = this.head
		while (curr != null) {
			++count
			curr = curr.ptr
		}
		return count
	}

	contains(n) {
		let curr = this.head
		while (curr != null) {
			if (curr.data == n) {
				return node
			}
			curr = curr.ptr
		}
		return false
	}

	insert(data, pos) {
		if (pos == 0) {
			this.head = new Node(data, this.head)
			return this.head
		} else if (pos == this.length()) {
			this.tail.ptr = new Node(data)
			this.tail = this.tail.ptr
			this.tail
		} else {
			let count = 1
			let curr = this.head
			while (count < pos) {
				++count
				curr = curr.ptr
			}
			let ptr = curr.ptr
			console.log(ptr)
			let node = new Node(data)
			node.ptr = curr.ptr
			curr.ptr = node
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




	







