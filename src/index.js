const mask = (value, pattern) => {
	if (!value) throw new TypeError('Disguise: A value must be passed.');

	if (!pattern) return value;

	const TOKENS = {
		NUMBER: '9',
		STRING: 'S',
	};

	const isNumber = (value, mask) =>
		mask === TOKENS.NUMBER && value.match(/\d/g);
	const isLetter = (value, mask) =>
		mask === TOKENS.STRING && value.match(/\w/g);

	let output = [];
	let i = 0;
	let j = 0;

	const inputs = value.toString().replace(/\W/g, '');
	const patternValues = pattern.toString();

	const inputsLength = inputs.length;
	const patternLength = patternValues.length;

	for (i; i < patternLength; i++) {
		const char = inputs.charAt(j);
		const mask = patternValues.charAt(i);

		if (mask.match(/\W/g)) {
			if (j >= inputsLength) {
				if (!char && i >= inputsLength && !!patternValues.charAt(i + 1)) {
					break;
				}
			}

			output.push(mask);
		} else {
			if (isNumber(char, mask) || isLetter(char, mask)) {
				output.push(char);
				j++;
			} else {
				if (!char || [TOKENS.NUMBER, TOKENS.STRING].includes(mask)) {
					return output.join('');
				}

				output.push(mask);
			}
		}
	}

	return output.join('');
};

export { mask };
