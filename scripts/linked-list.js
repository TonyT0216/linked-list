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
       Returns +1 to indicate a successful addition to the list,
       otherwise return -1
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
            itemAdded = 1;
            return itemAdded;
        } else {
            // let node = {
            //     data: data,
            //     next: null,
            // }

            // while (currentNode.next !== null) {
            //     currentNode = currentNode.next;
            // }

            // currentNode.next = node;
            // this.count++;
            // itemAdded = 1;
            this.addLast(data);
            itemAdded = 1;
            return itemAdded;
        }

        return itemAdded;

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

        if (data === null || data === undefined) {
            throw new Error("No data to put into the LinkedList class");
        }

        let newLink = {
            data: data,
            next: null
        }

        let currentLink = this.head;

        if (index === 0) {
            this.addFirst(data);
        } else {
            for (let i = 1; i < index; i++) {
                if (index === this.count) {
                    this.addLast(data);
                    return;
                }
                currentLink = currentLink.next;
            }
            newLink.next = currentLink.next;
            currentLink.next = newLink;
            this.count++;
        }
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

    /*
        Check to see if the data argument given by a user is an element inside 
        this LinkedList.  
        Will throw an Error message if the data argument is null or undefined.
        Returns -1 if the argument is not present in the LinkedList,
        otherwise returns +1 
    */
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

    /* 
        Retrieves the element at the location of index
        Will throw an Error message if the given index argument is greater
        than the count of this linked list, or if the index is less than
        -1.
        Will also throw an Error message if the given index argument is null
        or is undefined.
    */
    get(index) {

        if (index >= this.count || index < 0) {
            throw new Error("The index doesn't make sense");
        } else if (index === null || index === undefined) {
            throw new Error("Can't look up an index, with no index");
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

    /* 
        Retrieves the Node at the location of index
        Will throw an Error message if the given index argument is greater
        than the count of this linked list, or if the index is less than
        -1.
        Will also throw an Error message if the given index argument is null
        or is undefined.
        Returns the Node at the index if it is found, will return -1 otherwise
    */
    getNode(index) {

        if (index >= this.count || index < 0) {
            throw new Error("The index doesn't make sense");
        } else if (index === null || index === undefined) {
            throw new Error("Can't look up an index, with no index");
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

    /* 
        Removes the Node in the linked list
        Will also throw an Error message if the given data argument is null
        or is undefined.
        Returns the Node with the data argument, otherwise returns -1
    */
    remove(data) {

        if (data === null || data === undefined) {
            throw new Error("Null data and undefined data is not present in the list.");
        }

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
            return -1;

        if (this.size() === 1) {
            this.head = this.tail = null;
        } else if (current === this.head) {
            removeFirst();
        } else if (current === this.tail) {
            removeLast();
        } else {
            previous.next = current.next;
        }

        this.count--;

        return current;
    }

    removeFirst() {
        if (this.count === 0 || (this.head.data === null || this.head.data === undefined)) {
            throw new Error("No link to remove");
        }


        let current = this.head;
        this.head = current.next;
        this.count--;
        return current.data;
    }

    removeLast() {

        if (this.count === 0 || (this.head.data === null || this.head.data === undefined)) {
            throw new Error("No link to remove");
        }

        let previous = null;
        let current = this.head;

        while (current !== null && found === -1) {
            previous = current;
            current = current.next;
        }

        let result = this.tail;
        tail = previous;
        if (tail === null) {
            this.head = null;
        } else {
            tail.next = null;
        }

        this.count--;

        return result.data;
    }

    removeAtIndex(index) {

        if (index < 0) {
            throw new Error("Index must be at least 1");
        } else if (index > this.count) {
            throw new Error("The index is greater than the current size of the list.");
        }

        let previousLink = null;
        let currentLink = this.head;

        if (index === 0) {  
            this.removeFirst();
        } else {
            for (let i = 1; i <= index; i++) {
                if (index === this.count) {
                    this.removeLast();
                }
                previousLink = currentLink;
                currentLink = currentLink.next;
            }

            previousLink.next = currentLink.next;
            this.count--;
        }


    }

    toArray()
    {
        let currentLink = this.head;
        let array = [];

        while( currentLink !== null )
        {
            array.push(currentLink.data);
            currentLink = currentLink.next;
        }

        return array;
    }
}

var linkedList = new LinkedList();
linkedList.addAtIndex(25, 0);
linkedList.addAtIndex(40, 0);
linkedList.addAtIndex(35, 1);
linkedList.addAtIndex(10, 2);
linkedList.addAtIndex(44,4);
linkedList.addAtIndex(55,3);
linkedList.toArray();
