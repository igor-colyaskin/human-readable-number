module.exports = function toReadable(number) {
	let result = '';
	let a = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety'
	}

	let h = Math.floor(number / 100);
	let rest = number % 100;
	let d = Math.floor(rest / 10);
	let u = rest % 10;

	let du = '';
	if (!d && !u) {
		du = a[0];
	} else if (!d && u) {
		du = a[u];
	} else if (d && !u) {
		du = a[d * 10];
	} else if (d < 2 && u) {
		du = a[rest];
	} else {
		du = a[d * 10] + ' ' + a[u];
	}

	if (h && !d && !u) return a[h] + ' hundred';
	if (!h) return du;
	return a[h] + ' hundred ' + du;
}
