// Add all numbers from to to n inclusive
function addUpTo(n) {
	// constant operations no matter the size of n
	return (n * (n + 1)) / 2;

	// operations are linked to size of n
	// let total = 0;
	// for (let i = 1; i <= n; i++) {
	// 	total += i;
	// }
	// return total;
}

console.log(addUpTo(6));
