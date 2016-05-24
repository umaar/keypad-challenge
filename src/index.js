'use strict';

const alphabet = [
	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
	['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
	['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']
];

const directions = ['up', 'right', 'down', 'left'];

function getSequence(word) {
	let sequence = [];
	let currentX = 0;
	let currentY = 0;

	word.split('').forEach(letter => {
		for (let i = 0; i < alphabet.length; i++) {
			const row = alphabet[i];

			for (let j = 0; j < row.length; j++) {
				const char = alphabet[i][j];

				if (char === letter) {
					const targetX = j - currentX;
					const targetY = i - currentY;

					let direction;
					if (targetX > 0) {
						direction = directions[1];
					}
					if (targetX < 0) {
						direction = directions[3];
					}
					sequence = sequence.concat(Array(Math.abs(targetX)).fill(direction));

					if (targetY > 0) {
						direction = directions[2];
					}
					if (targetY < 0) {
						direction = directions[0];
					}
					sequence = sequence.concat(Array(Math.abs(targetY)).fill(direction));
					sequence = sequence.concat('⏎');

					currentX = j;
					currentY = i;
				}
			}
		}
	});

	return sequence;
}

module.exports = getSequence;
