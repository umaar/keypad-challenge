import test from 'ava';
import keypadChallenge from '../src/index.js';

test('Works with single letters', t => {
	const result1 = keypadChallenge('a');
	t.deepEqual(result1, ['⏎']);

	const result2 = keypadChallenge('b');
	t.deepEqual(result2, ['right', '⏎']);

	const result3 = keypadChallenge('c');
	t.deepEqual(result3, ['right', 'right', '⏎']);

	const result4 = keypadChallenge('z');
	t.deepEqual(result4, ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'down', 'down', '⏎']);
});

test('Works with words', t => {
	const result1 = keypadChallenge('tree');
	const expected1 = [
		'right',
		'down',
		'down',
		'⏎',
		'right',
		'right',
		'right',
		'right',
		'right',
		'right',
		'right',
		'up',
		'⏎',
		'left',
		'left',
		'left',
		'left',
		'up',
		'⏎',
		'⏎'
	];
	t.deepEqual(result1, expected1);

	const result2 = keypadChallenge('hello world');
	const expected2 = [
		'right',
		'right',
		'right',
		'right',
		'right',
		'right',
		'right',
		'⏎',
		'left',
		'left',
		'left',
		'⏎',
		'left',
		'left',
		'down',
		'⏎',
		'⏎',
		'right',
		'right',
		'right',
		'⏎',
		'left',
		'down',
		'⏎',
		'right',
		'up',
		'⏎',
		'right',
		'right',
		'right',
		'⏎',
		'left',
		'left',
		'left',
		'left',
		'left',
		'left',
		'⏎',
		'right',
		'up',
		'⏎'
	];
	t.deepEqual(result2, expected2);
});
