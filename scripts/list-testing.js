var linkedList = new LinkedList();
linkedList.addFirst(10);
linkedList.addFirst(10);
linkedList.addFirst(20);
linkedList.addFirst(20);
linkedList.addFirst(30);
linkedList.addFirst(30);
linkedList.addFirst(40);
linkedList.addFirst(40);
linkedList.addFirst(50);
linkedList.addFirst(50);

QUnit.test("linked list.addFirst", function( assert ) {
	assert.equal(linkedList.get(0), 50);
	assert.equal(linkedList.get(1), 50);
	assert.equal(linkedList.get(2), 40);
	assert.equal(linkedList.get(3), 40);
	assert.equal(linkedList.get(4), 30);
	assert.equal(linkedList.get(5), 30);
	assert.equal(linkedList.get(6), 20);
	assert.equal(linkedList.get(7), 20);
	assert.equal(linkedList.get(8), 10);
	assert.equal(linkedList.get(9), 10);
	assert.equal(linkedList.size(), 10);
});

QUnit.test("linked list.add", function( assert ) {
	assert.equal(linkedList.add(0), 1);
	assert.equal(linkedList.get(10), 0);
	assert.equal(linkedList.add(1), 1);
	assert.equal(linkedList.get(11), 1);
});
