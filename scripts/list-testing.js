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

var secondList = new LinkedList();
secondList.add("multi");
secondList.add("-");
secondList.add("type");
secondList.add("usage");
secondList.add("for");
secondList.add("the");
secondList.add("win");

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
	assert.equal(linkedList.contains(100), false);
	assert.equal(linkedList.remove(30), true);
	assert.equal(linkedList.remove(30), true);
	assert.equal(linkedList.size(), 8);
	assert.equal(linkedList.contains(30), false);
	linkedList.addAtIndex(100,4);
	assert.equal(linkedList.size(), 9);
	assert.equal(linkedList.get(4), 100);
});