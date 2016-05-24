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
