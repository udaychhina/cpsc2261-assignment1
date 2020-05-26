import { Orchard } from './orchard';
import { Tree } from './tree';

describe('Orchard', () => {
	it('should create an instance', () => {
		expect(new Orchard()).toBeTruthy();
	});
	it('should create an orchard with 0 trees', () => {
		let orchard = new Orchard();
		expect(orchard.trees.length).toEqual(0);
	});
	it('should create an orchard with 0 size', () => {
		let orchard = new Orchard();
		expect(orchard.size).toEqual(0);
	});
	it('should create an orchard with 0 fruitAvailable', () => {
		let orchard = new Orchard();
		expect(orchard.totalFruitAvailable()).toEqual(0);
	});
	it('should create an orchard with 3 fruit available when tree growth 100 and fruit taken 0', () => {
		let t = new Tree(1000, 0);
		let orchard = new Orchard();
		orchard.addTree(t);
		expect(orchard.totalFruitAvailable()).toEqual(3);
	});
	it('should have infinte fruit available if one tree has infinite growth', () => {
		let t = new Tree(Infinity, 0);
		let orchard = new Orchard(10);
		orchard.addTree(t);
		expect(orchard.totalFruitAvailable()).toEqual(Infinity);
	})
	it('should fit everything when the trees list is empty', () => {
		let orchard = new Orchard(10);
		let t = new Tree(1);
		expect(orchard.canFit(t)).toBe(true);
	});
	it('should fit when total trees\' size is equal to orchard size', () => {
		let t = new Tree(20, 0);
		let orchard = new Orchard(14);
		orchard.addTree(t);
		expect(orchard.canFit(t)).toBe(true);
	});
	it('should not fit when total trees\' size more than ochard size', () => {
		let t = new Tree(20, 0);
		let t2 = new Tree(20, 0);
		let orchard = new Orchard(7);
		orchard.addTree(t);
		orchard.addTree(t2);
		expect(orchard.canFit(t)).toBe(false);
	});
});
