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
	let sequence = [];
	let currentX = 0;
	let currentY = 0;

	word.split('').forEach(letter => {
		alphabet.forEach((row, rowIndex) => {
			row.forEach((char, columnIndex) => {
				if (char === letter) {
					const targetX = columnIndex - currentX;
					const targetY = rowIndex - currentY;

					const xDirection = getXDirection(targetX);
					const yDirection = getYDirection(targetY);

					const xDirections = createDirections(targetX, xDirection);
					const yDirections = createDirections(targetY, yDirection);
					sequence = sequence.concat(xDirections, yDirections, '⏎');
					currentX = columnIndex;
					currentY = rowIndex;
				}
			});
		});
	});

	return sequence;
}

module.exports = getSequence;
