'use strict';

const alphabet = [
	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
	['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
	['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']
];

const directions = ['up', 'right', 'down', 'left'];

function getXDirection(targetX) {
	let xDirection;
	xDirection = (targetX > 0) ? directions[1] : xDirection;
	xDirection = (targetX < 0) ? directions[3] : xDirection;
	return xDirection;
}

function getYDirection(targetY) {
	let yDirection;
	yDirection = (targetY > 0) ? directions[2] : yDirection;
	yDirection = (targetY < 0) ? directions[0] : yDirection;
	return yDirection;
}

function createDirections(count, direction) {
	return Array(Math.abs(count)).fill(direction);
}

function getSequence(word) {
	let currentX = 0;
	let currentY = 0;

	return word.split('').reduce((charSequence, letter) => {
		const rowReducer = alphabet.reduce((rowSequence, row, rowIndex) => {
			const columnReducer = row.reduce((sequence, char, columnIndex) => {
				if (char === letter) {
					const targetX = columnIndex - currentX;
					const targetY = rowIndex - currentY;

					const xDirection = getXDirection(targetX);
					const yDirection = getYDirection(targetY);

					const xDirections = createDirections(targetX, xDirection);
					const yDirections = createDirections(targetY, yDirection);
					currentX = columnIndex;
					currentY = rowIndex;
					return sequence.concat(xDirections, yDirections, '⏎');
				}
				return sequence;
			}, []);
			return rowSequence.concat(columnReducer);
		}, []);
		return charSequence.concat(rowReducer);
	}, []);
}

module.exports = getSequence;
