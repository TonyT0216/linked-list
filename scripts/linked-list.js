"use strict"
/* A strict js version of a LinkedList class */
class LinkedList {

    // Constructor for LinkedList class
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /*
    	Size function that returns the count of this LinkedList
    	Returns this.count of the LinkedList  
    */
    size() {
        return this.count;
    }

    /* 
       Add the given data argument into this LinkedList 
       Will throw an Error message if the argument is null 
       or undefined
       Returns +1 to indicate a successful addition to the list
     */
    add(data) {

        let itemAdded = -1;

        if (data === null || data === undefined) {
            throw new Error("No data to put into the LinkedList class");
        }

        // let node = {
        //     data: data,
        //     next: null,
        // }

        let currentNode = this.head;
        if (!currentNode) {
            this.addFirst(data);
        } else {
            let node = {
                data: data,
                next: null,
            }

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
            this.count++;
            itemAdded = 1;
        }

    }

    /*
    	Adds an the given data argument into this LinkedList
    	at the given index.
    	Will throw an Error message if the index is less than
    	zero, or if the index is greater than the size of this 
    	LinkedList
    	Doesn't return anything
    */
    addAtIndex(data, index) {

        if (index < 0) {
            throw new Error("Index must be at least 1");
        } else if (index > this.count) {
            throw new Error("The index is greater than the current size of the list.");
        }

        let tempNode = {
            data: data,
            next: null
        }

        let currentNode = this.head;

        if (index === 0) {
            this.addFirst(data);
        } else {
            for (let i = 1; i < index; i++) {
                if (index === this.count) {
                    this.addLast(data);
                }
                currentNode = currentNode.next;
            }
            tempNode.next = currentNode.next;
            currentNode.next = tempNode;
        }

        this.count++;
    }

    /*
    	Add the data argument into this LinkedList as the first element.
    	Will throw an Error message if the data is null or undefined
    	Doesn't return anything
    */
    addFirst(data) {

        if (data === null || data === undefined) {
            throw new Error("No data to put into the LinkedList class");
        }

        let node = {
            data: data,
            next: null
        }

        if (this.count === 0) {
            this.head = node;
            this.tail = node;
            this.count++;
        } else {
            node.next = this.head;
            this.head = node;
            this.count++;
        }
    }

    /*
    	Add the data argument into this LinkedList as the last element.
    	Will throw an Error message if the data is null or undefined
    	Doesn't return anything
    */
    addLast(data) {

        if (data === null || data === undefined) {
            throw new Error("No data to put into the LinkedList class");
        }

        let node = {
            data: data,
            next: null
        }

        if (this.count === 0) {
            this.addFirst(data);
        } else {
            this.tail.next = node;
            this.tail = node;
            this.count++;
        }
    }

    contains(data) {
        if (data === null || data === undefined) {
            throw new Error("Null data and undefined data is not present in the list.");
        }

        let found = -1;

        let currentLink = this.head;

        while (currentLink !== null && found === -1) {
            if (data === (currentLink.data)) {
                found = 1;
            } else {
                currentLink = currentLink.next;
            }
        }
        return found;
    }

    get(index) {
        if (index >= this.count || index < 0) {
            throw new Error("The index doesn't make sense");
        }

        let currentLink = this.head;
        let count = 0;
        while (currentLink !== null) {
            if (count === index)
                return currentLink.data;
            count++;
            currentLink = currentLink.next;
        }

        return -1;
    }

    getNode(index) {
        if (index >= this.count || index < 0) {
            throw new Error("The index doesn't make sense");
        }

        let currentLink = this.head;
        let count = 0;
        while (currentLink !== null) {
            if (count === index)
                return currentLink;
            count++;
            currentLink = currentLink.next;
        }

        return -1;

    }

    remove(data) {
        if (data === null)
            throw new Error("Null data not allowed");

        let found = -1;

        let previous = null;
        let current = this.head;

        while (current !== null && found === -1) {
            if (data === (current.data)) {
                found = 1;
            } else {
                previous = current;
                current = current.next;
            }
        }

        if (found === -1)
            throw new Error("Element not found in the list");

        if (this.size() === 1) {
            this.head = this.tail = null;
        } else if (current === this.head) {
            this.head = current.next;
        } else if (current === this.tail) {
            this.tail = previous;
            this.next = null;
        } else {
            previous.next = current.next;
        }

        this.count--;

        return current;
    }
}

var linkedList = new LinkedList();
// linkedList.add();
linkedList.add(25);
linkedList.addFirst(10);
linkedList.addLast(12);
