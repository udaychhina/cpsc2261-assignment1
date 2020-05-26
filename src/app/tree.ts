export class Tree {
	growth: number;
	fruitTaken: number;

	constructor(growth: number = 0, fruitTaken: number = 0) {
		this.growth = growth;
		this.fruitTaken = fruitTaken;
	}

	grow(growth: number = 1): void {
		this.growth += growth;
	}

	fruitAvailable(): number {
		let available;
		if(this.growth == 0) {
			available = 0;
		} else {
			available = Math.floor(Math.log10(this.growth)) - this.fruitTaken;
		}
		return available;
	}

	size(): number {
		return Math.round(Math.pow(this.growth, 2 / 3));
	}
}
