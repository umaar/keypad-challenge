'use strict';

const alphabet = [
	['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
	['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'],
	['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']
];

const directions = ['up', 'right', 'down', 'left']

let currentX = 0;
let currentY = 0;

function getSequence(word) {
	let sequence = [];

	word.split('').forEach(letter => {
		for (let i=0; i<alphabet.length; i++) {
			let row = alphabet[i];

			for (let j=0; j<row.length; j++) {
				let char = alphabet[i][j];
				if (char === letter) {

					let targetX = j - currentX;
					let targetY = i - currentY;

					let direction;
					if (targetX > 0) direction = directions[1];
					if (targetX < 0) direction = directions[3];
					sequence = sequence.concat( Array(Math.abs(targetX)).fill(direction) );

					if (targetY > 0) direction = directions[2];
					if (targetY < 0) direction = directions[0];
					sequence = sequence.concat( Array(Math.abs(targetY)).fill(direction) );
					sequence = sequence.concat('⏎');

					currentX = j;
					currentY = i;
				}
			}
		}
	});

	return sequence;
}

console.log(getSequence('a b'));