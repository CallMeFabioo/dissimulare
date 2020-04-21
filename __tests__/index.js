import { mask } from '../src';

it('should return a function', () => {
	expect(mask).toBeInstanceOf(Function);
});

it('should throw an error if value is not provided', () => {
	expect(() => mask()).toThrow('Disguise: A value must be passed.');
	expect(() => mask()).toThrow(TypeError);
});

it('should return the value when pattern is not provided', () => {
	expect(mask(42)).toBe(42);
});

it.each`
	value                  | pattern                     | expected
	${1}                   | ${'-9'}                     | ${'-1'}
	${11}                  | ${'(99)'}                   | ${'(11)'}
	${123}                 | ${'9.9.9'}                  | ${'1.2.3'}
	${'06031991'}          | ${'99/99/9999'}             | ${'06/03/1991'}
	${'20001212'}          | ${'9999/99/99'}             | ${'2000/12/12'}
	${'1011'}              | ${'99/99/9999'}             | ${'10/11'}
	${'1011'}              | ${'999.999.999-99'}         | ${'101.1'}
	${'1011444444'}        | ${'+99 99 9999-99'}         | ${'+10 11 4444-44'}
	${'8888888'}           | ${'+1 (999) 999-9999'}      | ${'+1 (888) 888-8'}
	${'11962257573'}       | ${'(99) 99999-9999'}        | ${'(11) 96225-7573'}
	${'12354379650'}       | ${'999.999.999-99'}         | ${'123.543.796-50'}
	${'57808519000118'}    | ${'99.999.999/9999-99'}     | ${'57.808.519/0001-18'}
	${'AB1'}               | ${'SSS-99'}                 | ${'AB1'}
	${'THE1234'}           | ${'SSS-9999'}               | ${'THE-1234'}
	${'THE'}               | ${'SS.SSSS.SSSS.SS.SS.SS'}  | ${'TH.E'}
	${'9BGRD08X04G117974'} | ${'SS.SS.SSSSS.S.S.SSSSSS'} | ${'9B.GR.D08X0.4.G.117974'}
`(
	'should return "$expected" when pattern is "$pattern" for input value of "$value"',
	({ value, pattern, expected }) => {
		expect(mask(value, pattern)).toBe(expected);
	}
);

it('should return the matching pattern when it is a Array', () => {
	const pattern = ['(99) 99999-9999', '(99) 9999-9999'];

	expect(mask('11962257573', pattern)).toBe('(11) 96225-7573');
	expect(mask('1162257573', pattern)).toBe('(11) 6225-7573');
});
