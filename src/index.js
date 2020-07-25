import memoize from 'memoize-one';

export const mask = (value, pattern) => {
	if (!value) {
		console.error('Dissimulare: A value must be passed.');

		return;
	}

	if (!pattern) return value;

	const TOKENS = {
		NUMBER: '9',
		STRING: 'S',
	};

	const onlyAlphaNums = memoize((s) => s.toString().replace(/\W/g, ''));
	const isNumber = memoize((v, m) => m === TOKENS.NUMBER && v.match(/\d/g));
	const isLetter = memoize((v, m) => m === TOKENS.STRING && v.match(/\w/g));

	const inputs = onlyAlphaNums(value);
	const inputsLength = inputs.length;

	if (Array.isArray(pattern)) {
		pattern = pattern.find(
			(pattern) => onlyAlphaNums(pattern).length === inputsLength
		);
	}

	const patternValues = pattern.toString();
	const patternLength = patternValues.length;

	let output = [];
	let i = 0;
	let j = 0;

	for (; i < patternLength; i++) {
		const char = inputs.charAt(j);
		const maskChar = patternValues.charAt(i);

		if (isNumber(char, maskChar) || isLetter(char, maskChar)) {
			output.push(char);
			j++;

			continue;
		}

		if (maskChar.match(/\W/g)) {
			if (!char && i >= inputsLength && !!patternValues.charAt(i + 1)) {
				break;
			}

			output.push(maskChar);

			continue;
		}

		// ending of input value, doesn't need to
		// continue iterate over the pattern
		if (!char || [TOKENS.NUMBER, TOKENS.STRING].includes(mask)) {
			return output.join('');
		}

		output.push(maskChar);
	}

	return output.join('');
};
