import { Tree } from './tree';

describe('Tree', () => {
	it('should create an instance', () => {
		expect(new Tree()).toBeTruthy();
 	});
	it('should create a tree with 0 growth', () => {
		expect((new Tree()).growth).toEqual(0);	
	});
	it('should create a tree with 0 fruitTaken', () => {
		expect((new Tree()).fruitTaken).toEqual(0);
	});
	it('should create a tree with 0 fruit available', () => {
		let tree = new Tree();
		expect(tree.fruitAvailable()).toEqual(0);
	});
	it('should have fruitAvailable as Infinity when growth is Infinity', () => {
		let tree = new Tree(Infinity, 0);
		expect(tree.fruitAvailable()).toEqual(Infinity);
	});
	it('should have 3 fruitAvailable when growth is 1000 and fruitTaken is 0', () => {
		let tree = new Tree(1000, 0);
		expect(tree.fruitAvailable()).toEqual(3);
	});
	it('should create a tree with initial size 0', () => {
		let tree = new Tree();
		expect(tree.size()).toEqual(0);
	});
	it('should create a tree size 7 (rounded) when growth is 20', () => {
		let tree = new Tree(20, 0);
		expect(Math.round(tree.size())).toEqual(7);
	});
});
