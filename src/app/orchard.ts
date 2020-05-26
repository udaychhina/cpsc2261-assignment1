import { Tree } from "./tree";

export class Orchard {
	size: number;
	trees: Tree[] = [];

	constructor(size: number = 0) {
		this.size = size;
		this.trees = new Array(0);
	}

	addTree(t: Tree) :void {
		this.trees.push(t);
	}

	totalFruitAvailable() {
		let total: number = 0;
		if(this.trees.length == 0) {
			total = 0;
		} else {
			for (let i = 0; i < this.trees.length; i++) {
				let fruitOnTree = this.trees[i].fruitAvailable();
				total += fruitOnTree;
			}
		}
		return total;
	}

	canFit(t: Tree) {
		let flag: boolean = true;
		let totalSize: number = 0;
		if(this.trees.length == 0) {
			return flag;
		} else {
			for (let i = 0; i < this.trees.length; i++) {
				totalSize += this.trees[i].size();
			}
		}
		let newSize = totalSize + t.size();
		if(newSize > this.size) {
			flag = false;
		}
		return flag;
	}
}
